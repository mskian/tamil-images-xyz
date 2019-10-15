workflow "New workflow" {
  on = "push"
  resolves = ["ht"]
}

action "ht" {
  uses = "swinton/httpie.action@69125d73caa2c6821f6a41a86112777a37adc171"
  secrets = ["GOTIFY_URL"]
  env = {
    title = "Hello test"
    message = "Test push"
  }
}
