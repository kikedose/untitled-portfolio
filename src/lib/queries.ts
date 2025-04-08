import 'server-only';
import { cache } from 'react';
import { db } from '~/server/db';
import { type Project } from './types/project';

/**
 * Retrieves a project by its ID from the database using a request-level cache
 * to avoid duplicate queries in a same route.
 * Returns the project if found, null if specifically not found.
 * Throws an error for invalid input or any unexpected database/operational errors.
 *
 * @param {string} id - The unique identifier of the project. Must be a non-empty string.
 * @returns {Promise<Project | null>} A promise resolving to the project object if found, otherwise null.
 * @throws {Error} Throws if the provided ID is invalid (e.g., empty).
 * @throws {Error} Throws if any database error occurs during retrieval (e.g., connection, permissions, query syntax).
 */

export const retrieveProjectById = cache(
  async (id: string): Promise<Project | null> => {
    if (!id || typeof id !== 'string') {
      throw new Error(
        `Invalid project ID provided: Must be a non-empty string. Received: ${id}`
      );
    }

    console.log(`RETRIEVING project ${id}`); // logging for debugging cache

    try {
      const project = await db.query.projects.findFirst({
        where: (projects, { eq }) => eq(projects.id, id),
      });

      return project ?? null;
    } catch (error) {
      console.error(`DATABASE_ERROR: Failed to retrieve project ${id}.`, error);
      throw new Error(
        `Failed to retrieve project ${id} due to a database error.`,
        {
          cause: error,
        }
      );
    }
  }
);

/**
 * Retrieves all projects from the database using a request-level cache
 * to avoid duplicate queries in the homepage.
 * Returns an array of projects if found,  throws an error for any unexpected database/operational errors.
 *
 * @returns {Promise<Project[] | null>} A promise resolving to the project object if found, otherwise null.
 * @throws {Error} Throws if any database error occurs during retrieval (e.g., connection, permissions).
 */

export const retrieveAllProjects = cache(
  async (): Promise<Project[] | null> => {
    console.log(`RETRIEVING table 'projects'`); // logging for debugging cache

    try {
      const projects = await db.query.projects.findMany();

      if (!projects.length) {
        console.warn("Table 'projects' is empty.");
      }

      return projects ?? null;
    } catch (error) {
      console.error(
        "DATABASE_ERROR: Failed to retrieve table 'projects'.",
        error
      );
      throw new Error(
        "Failed to retrieve table 'projects' due to a database error.",
        {
          cause: error,
        }
      );
    }
  }
);
