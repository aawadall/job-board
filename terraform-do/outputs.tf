output "mongo_connection" {
  value = digitalocean_database_cluster.mongo.uri
  sensitive = true
}

output "redis_connection" {
  value = digitalocean_database_cluster.redis.uri
    sensitive = true
}

output "app_url" {
  value = digitalocean_app.backend.default_ingress
}