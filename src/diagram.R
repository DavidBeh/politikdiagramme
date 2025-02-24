library(networkD3)
library(dplyr)
library(htmlwidgets)
library(IRdisplay)
library(base64enc)
library(glue) # Add this line to import the glue package

links <- read.csv("src/links.csv")
order <- read.csv("src/order.csv")
names <- read.csv("src/names.csv")

print(links)
# Set source,target year to 2021,2025
links$sourceYear <- 2021
links$targetYear <- 2025

# Create a dataframe that lists all unique pairs of source,sourceYear and target,targetYear
nodes <- data.frame(
  short = c(as.character(links$source), as.character(links$target)),
  year = c(links$sourceYear, links$targetYear)
) %>% unique()

nodes$order <- match(nodes$short, order$short)

# Order the elements in links based on the order column
nodes <- nodes %>%
  arrange(order) %>%
  select(-order)

links$sourceId <- match(interaction(links$source, links$sourceYear), interaction(nodes$short, nodes$year)) - 1
links$targetId <- match(interaction(links$target, links$targetYear), interaction(nodes$short, nodes$year)) - 1



nodes$name <- names$name[match(nodes$short, names$short)]
nodes$color <- names$color[match(nodes$short, names$short)]

print(links)
print(nodes)

# Create a color scale using the unique colors from nodes$color
unique_colors <- unique(nodes$color)
colors <- JS(glue('d3.scaleOrdinal().domain({jsonlite::toJSON(unique(nodes$name))}).range({jsonlite::toJSON(unique_colors)});'))

p <- sankeyNetwork(Links = links, Nodes = nodes,
                   Source = "sourceId", Target = "targetId",
                   Value = "value", NodeID = "name",
                   NodeGroup = "color",
                   colourScale = colors, # Use for color mapping
                   sinksRight=FALSE,
                   nodeWidth = 30, # Adjust node width
                   nodePadding = 5,
                   iterations = 0,
                   fontSize = 20  # Adjust font size
)


# Save widget to a temporary file
#temp_file <- tempfile(fileext = ".html")
#saveWidget(p, temp_file, selfcontained = TRUE)

saveWidget(p, "src/sankey.html", selfcontained = TRUE)

# # Read the HTML file and encode it as base64
# html_data <- base64enc::base64encode(temp_file)

# # Create the data URI
# data_uri <- str_glue("data:text/html;base64,{html_data}")

# # Embed the HTML in an iframe using the data URI
# display_html(str_glue(
#   '<iframe src="{data_uri}" width="100%" height="800" style="border:none;"></iframe>' # Increased height for better visualization
# ))