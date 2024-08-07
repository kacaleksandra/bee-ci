'use client';

import { FolderClosed, Home, Library, PanelLeft, Settings } from 'lucide-react';
import Link from 'next/link';
import { Button } from './button';
import { Sheet, SheetContent, SheetTrigger } from './sheet';
import { ThemeToggler } from './theme-toggler';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './tooltip';

const NavBar = () => {
  return (
    <>
      <aside className='fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex'>
        <TooltipProvider>
          <nav className='flex flex-col items-center gap-4 px-2 sm:py-5'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='/dashboard'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Home className='h-5 w-5' />
                  <span className='sr-only'>Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Dashboard</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <FolderClosed className='h-5 w-5' />
                  <span className='sr-only'>My repositories</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>My repositories</TooltipContent>
            </Tooltip>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Library className='h-5 w-5' />
                  <span className='sr-only'>Documentation</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Documentation</TooltipContent>
            </Tooltip>
          </nav>
          <nav className='mt-auto flex flex-col items-center gap-4 px-2 sm:py-5'>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href='#'
                  className='flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8'
                >
                  <Settings className='h-5 w-5' />
                  <span className='sr-only'>Settings</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side='right'>Settings</TooltipContent>
            </Tooltip>
          </nav>
        </TooltipProvider>
      </aside>
      <div className='flex flex-col sm:gap-4 sm:py-4 sm:pl-14'>
        <header className='sticky top-0 z-30 flex h-14 items-center justify-between gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6'>
          <Sheet>
            <SheetTrigger asChild>
              <Button size='icon' variant='outline' className='sm:hidden'>
                <PanelLeft className='h-5 w-5' />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='left' className='sm:max-w-xs'>
              <nav className='mt-4 grid gap-6 text-lg font-medium'>
                <Link
                  href='/dashboard'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <Home className='h-5 w-5' />
                  Dashboard
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-foreground'
                >
                  <FolderClosed className='h-5 w-5' />
                  My repositories
                </Link>
                <Link
                  href='#'
                  className='flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground'
                >
                  <Library className='h-5 w-5' />
                  Documentation
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
          <div className='sm:hidden'>
            <ThemeToggler />
          </div>
        </header>
      </div>
    </>
  );
};

export { NavBar };
