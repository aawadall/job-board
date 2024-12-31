output "droplet_ip" {
  value = digitalocean_droplet.job_board_backend.ipv4_address
}

output "mongo_connection" {
  value = digitalocean_database_cluster.mongo.uri
  sensitive = true
}

output "redis_connection" {
  value = digitalocean_database_cluster.redis.uri
    sensitive = true
}
