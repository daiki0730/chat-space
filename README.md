# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...



## messegesテーブル

|カラム名|カラムの型|オプション|
|------|----|-------|
|body|text|add_index|
|image|string||
|group_id|references|foreign_key: true|
|user_id|references|foreign_key: true|

### アソシエーション
- belongs_to :user
- belongs_to :group

## usersテーブル

|カラム名|カラムの型|オプション|
|------|----|-------|
|name|string|null: false,add_index|
|email|text|null: false,add_index,unique|
|password|string|null: false|

### アソシエーション
- has_many :messages
- has_many :members
- has_many :groups, through: :users_groups

## groupsテーブル

|カラム名|カラムの型|オプション|
|------|----|-------|
|name|string|null: false|

### アソシエーション
- has_many :messages
- has_many :users_groups
- has_many :groups, through: :users_groups

## users_groupsテーブル

|カラム名|カラムの型|オプション|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### アソシエーション
- belongs_to :user
- belongs_to :group
