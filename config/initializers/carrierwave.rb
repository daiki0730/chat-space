require 'carrierwave/storage/abstract'
require 'carrierwave/storage/file'
require 'carrierwave/storage/fog'

CarrierWave.configure do |config|
  config.storage = :fog
  config.fog_provider = 'fog/aws'
  config.fog_credentials = {
    provider: 'AWS',
    aws_access_key_id: Rails.application.secrets.aws_access_key_id,
    aws_secret_access_key: Rails.application.secrets.aws_secret_access_key,
    region: 'ap-northeast-1'
  }

  set :default_env, {
  rbenv_root: "/usr/local/rbenv",
  path: "/usr/local/rbenv/shims:/usr/local/rbenv/bin:$PATH",
  IMG_UP_AWS_S3_ACCESS_KEY_ID: ENV["IMG_UP_AWS_S3_ACCESS_KEY_ID"],
  IMG_UP_AWS_S3_SECRET_ACCESS_KEY: ENV["IMG_UP_AWS_S3_SECRET_ACCESS_KEY"]
}

  config.fog_directory  = 'raccoon0730'
  config.asset_host = 'https://s3-ap-northeast-1.amazonaws.com/raccoon0730'
end
