import React from 'react';
import { motion } from 'motion/react';

interface SkeletonProps {
  className?: string;
  variant?: 'rect' | 'circle';
}

export default function Skeleton({ className = '', variant = 'rect' }: SkeletonProps) {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={`bg-white/5 ${variant === 'circle' ? 'rounded-full' : 'rounded-sm'} ${className}`}
    />
  );
}

export function TrainerSkeleton() {
  return (
    <div className="h-[450px] border border-white/10 bg-white/5 p-8 flex flex-col justify-end space-y-4">
      <Skeleton className="h-4 w-24 mb-2" />
      <Skeleton className="h-10 w-48" />
    </div>
  );
}

export function ClassSkeleton() {
  return (
    <div className="bg-white/5 border border-white/10 overflow-hidden">
      <Skeleton className="h-64 w-full" />
      <div className="p-8 space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <div className="space-y-2">
          <Skeleton className="h-3 w-1/2" />
          <Skeleton className="h-3 w-1/3" />
        </div>
        <Skeleton className="h-10 w-full mt-4" />
      </div>
    </div>
  );
}
