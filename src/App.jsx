
import './App.css'
import ColorBox from './ColorBox'
import ColorBoxGrid from './ColorBoxGrid';
function App() {

  const colors = [
    "#FFCCCC", // Light Pink
    "#FFB6C1", // Light Pink
    "#FF99CC", // Pastel Pink
    "#FF88FF", // Pastel Magenta
    "#FF77FF", // Pastel Pink
    "#CC99FF", // Pastel Purple
    "#FFD1DC", // Pastel Pink
    "#FFDAB9", // Peach Puff
    "#FFC0CB", // Pink
    "#FFB6C1", // Light Pink
    "#DB7093", // Pale Violet Red
    "#C71585", // Medium Violet Red
    "#E6E6FA", // Lavender
    "#DDA0DD", // Plum
    "#DA70D6", // Orchid
    "#D8BFD8", // Thistle
    "#DB7093", // Pale Violet Red
    "#C71585", // Medium Violet Red
    "#FF69B4", // Hot Pink
    "#FF1493", // Deep Pink
    "#BA55D3", // Medium Orchid
    "#9370DB", // Medium Purple
    "#8A2BE2", // Blue Violet
    "#9932CC", // Dark Orchid
    "#9400D3", // Dark Violet
    "#8B008B", // Dark Magenta
    "#800080", // Purple
    "#FF6347", // Tomato
    "#FF7F50", // Coral
    "#FFA07A", // Light Salmon
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#ADFF2F", // Green Yellow
    "#7FFF00", // Chartreuse
    "#32CD32", // Lime Green
    "#00FF00", // Lime
    "#008000", // Green
    "#00FA9A", // Medium Spring Green
    "#90EE90", // Light Green
    "#00FF7F", // Spring Green
    "#20B2AA", // Light Sea Green
    "#48D1CC", // Medium Turquoise
    "#00CED1", // Dark Turquoise
    "#00BFFF", // Deep Sky Blue
    "#1E90FF", // Dodger Blue
    "#4169E1", // Royal Blue
    "#0000FF", // Blue
    "#6495ED", // Cornflower Blue
    "#6A5ACD", // Slate Blue
    "#483D8B", // Dark Slate Blue
    "#4682B4", // Steel Blue
    "#87CEEB", // Sky Blue
    "#87CEFA", // Light Sky Blue
    "#00BFFFF", // Light Blue
    "#1C86EE", // Dodger Blue
    "#87CEEB", // Sky Blue
    "#FFA07A", // Light Salmon
    "#FF6347", // Tomato
    "#FF7F50", // Coral
    "#FFA07A", // Light Salmon
    "#FF8C00", // Dark Orange
    "#FFD700", // Gold
    "#FFA500", // Orange
    "#FFFF00", // Yellow
    "#ADFF2F", // Green Yellow
    "#7FFF00", // Chartreuse
    "#32CD32", // Lime Green
    "#00FF00", // Lime
    "#008000", // Green
    "#00FA9A", // Medium Spring Green
    "#90EE90", // Light Green
    "#00FF7F", // Spring Green
    "#20B2AA", // Light Sea Green
    "#48D1CC", // Medium Turquoise
    "#00CED1", // Dark Turquoise
    "#00BFFF", // Deep Sky Blue
    "#1E90FF", // Dodger Blue
    "#4169E1", // Royal Blue
    "#0000FF", // Blue
    "#6495ED", // Cornflower Blue
    "#6A5ACD", // Slate Blue
    "#483D8B", // Dark Slate Blue
    "#4682B4", // Steel Blue
    "#87CEEB", // Sky Blue
    "#87CEFA", // Light Sky Blue
    "#00BFFFF", // Light Blue
    "#1C86EE"  // Dodger Blue
];

  
  return (
    <>
     <ColorBoxGrid colors={colors}/>
    </>
  )
}

export default App
