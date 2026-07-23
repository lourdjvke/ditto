// Per-instance class overrides, merged onto each component's shared base classes with cn().

export type TileStyles = {
  className: string;
};
export type Tile2Styles = {
  className?: string;
  className2?: string;
  className3?: string;
  className4?: string;
};

export const Tile_styles: TileStyles[] = [
    { className: "h-8.5 text-border" },
    { className: "text-muted-foreground" },
    { className: "text-muted-foreground" }
];
export const Tile2_styles: Tile2Styles[] = [
    { className: "h-6.5", className2: "h-6.5", className3: "h-6.5" },
    {  },
    {  },
    {  },
    { className: "h-6.5", className2: "h-6.5", className3: "h-6.5" },
    { className: "h-6.5", className2: "h-6.5", className3: "h-6.5" },
    {  },
    {  },
    {  },
    { className: "h-6.5", className2: "h-6.5", className3: "h-6.5", className4: "whitespace-nowrap" },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    {  },
    { className: "h-6.5", className2: "h-6.5", className3: "h-6.5" },
    {  },
    {  }
];
