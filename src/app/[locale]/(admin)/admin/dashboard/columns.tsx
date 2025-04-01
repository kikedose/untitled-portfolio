'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type Project } from '~/lib/types/admin/project';
import { Button } from '~/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu';
import {
  ArrowUpDown,
  Eye,
  EyeOff,
  MoreHorizontal,
  Pencil,
  Trash2,
} from 'lucide-react';

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'country',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Country
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'year',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Year
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'hidden',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Visibility
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const hidden = row.getValue('hidden');

      return (
        <>
          {hidden ? (
            <EyeOff className="text-muted-foreground h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const { hidden } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Pencil size={20} />
              Edit Project
            </DropdownMenuItem>
            <DropdownMenuItem>
              {hidden ? (
                <>
                  <Eye className="h-4 w-4" />
                  Toggle Visible
                </>
              ) : (
                <>
                  <EyeOff className="text-muted-foreground h-4 w-4" />
                  Toggle Hidden
                </>
              )}
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Trash2 size={20} />
              Move to Trash
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
