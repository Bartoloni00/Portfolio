export const TechStackSkeleton = () => (
  <div className="py-12 bg-transparent overflow-hidden">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-4">
        {[...Array(8)].map((_, i) => (
          <div key={i} className="w-32 h-12 bg-neutral-800/40 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  </div>
);

export const ExperienceSkeleton = () => (
  <div className="py-24 max-w-7xl mx-auto px-6 md:px-12">
    <div className="h-16 w-64 bg-neutral-800/40 rounded-xl mx-auto mb-24 animate-pulse" />
    <div className="space-y-16">
      {[...Array(3)].map((_, i) => (
        <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-[calc(50%-40px)] h-64 bg-neutral-800/40 rounded-3xl animate-pulse" />
          <div className="hidden md:block w-8 h-8 rounded-full bg-neutral-800/40 animate-pulse" />
          <div className="hidden md:block w-full md:w-[calc(50%-40px)] h-8 bg-neutral-800/20 rounded animate-pulse" />
        </div>
      ))}
    </div>
  </div>
);

export const ProjectsSkeleton = () => (
  <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="h-12 w-48 bg-neutral-800/40 rounded-xl mx-auto mb-14 animate-pulse" />
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="p-6 h-96 bg-neutral-800/40 rounded-2xl animate-pulse" />
      ))}
    </div>
  </div>
);

export const ContactSkeleton = () => (
  <div className="py-20 max-w-7xl mx-auto px-4 lg:px-8">
    <div className="text-center mb-12 space-y-4">
      <div className="h-12 w-48 bg-neutral-800/40 rounded-xl mx-auto animate-pulse" />
      <div className="h-6 w-64 bg-neutral-800/20 rounded-xl mx-auto animate-pulse" />
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[600px]">
      <div className="md:row-span-4 bg-neutral-800/40 rounded-2xl animate-pulse" />
      <div className="md:row-span-2 bg-neutral-800/40 rounded-2xl animate-pulse" />
      <div className="md:row-span-2 bg-neutral-800/40 rounded-2xl animate-pulse" />
      <div className="md:col-span-2 bg-neutral-800/40 rounded-2xl animate-pulse" />
      <div className="md:col-span-2 bg-neutral-800/40 rounded-2xl animate-pulse" />
    </div>
  </div>
);
