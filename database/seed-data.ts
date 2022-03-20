interface SeedDdata {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedDdata = {
  entries: [
    {
      description:
        "Pendiente: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description:
        "In-Progress: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Finished: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam, optio.",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
