resource "digitalocean_database_cluster" "mongo" {
  name = "job-board-mongo"
  node_count = 1
  size = var.mongo_size
  engine = "mongodb"
  version = "7"
  region = var.region
  tags = [ "job-board", "database" ]
}

output "mongo_uri" {
  value = digitalocean_database_cluster.mongo.uri
  sensitive = true
}