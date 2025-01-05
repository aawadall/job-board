resource "digitalocean_app" "backend" {
  spec {
    name = var.app_name
    region = var.region
    service {
      name = "backend"
      github {
        repo = "aawadall/job-board"
        branch = "main"
        deploy_on_push = true
      }

      env {
        key = "MONGO_URI"
        value = digitalocean_database_cluster.mongo.uri
        scope = "RUN_AND_BUILD"
      }

      env {
        key = "REDIS_URI"
        value = digitalocean_database_cluster.redis.uri
        scope = "RUN_AND_BUILD"
      }

      http_port = 4000
      instance_size_slug = "basic-xxs"
      instance_count = 1
    }
  }

}

output "app_url" {
    value = digitalocean_app.backend.live_url
}