resource "digitalocean_database_cluster" "redis" {
  name = "job-board-redis"
    engine = "redis"
    version = "7"
    size = var.redis_size
    region = var.region
    node_count = 1
    tags = [ "job-board", "cache" ]
}

output "redis_uri" {
  value = digitalocean_database_cluster.redis.uri
  sensitive = true
}