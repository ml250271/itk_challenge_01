workflow "publish on release" {
  on = "push"
  resolves = ["publish"]
}

action "publish" {
  uses = "actions/npm@master"
  args = "publish"
  secrets = 65b340f8-3a13-4465-840d-dc31c9831e28
}
