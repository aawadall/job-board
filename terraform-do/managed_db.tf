resource "digitalocean_database_cluster" "mongo" {
  name = "job-board-mongo"
  node_count = 1
  engine = "mongodb"
  version = "7"
  size = "db-s-1vcpu-1gb"
  region = var.region
  tags = [ "job-board", "database" ]
}

output "mongo_uri" {
  value = digitalocean_database_cluster.mongo.uri
  sensitive = true
}