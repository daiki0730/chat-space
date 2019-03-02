server '54.199.191.186', user: 'ec2-user', roles: %w{app db web}

set :ssh_options, {
  port: 22,
  keys: [File.expand_path('~/.ssh/daikey0730.pem')],
  forward_agent: true,
  auth_methods: %w(publickey)
}
