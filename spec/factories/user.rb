FactoryBot.define do
  factory :user do
    sequence :email do |n|
      "test-#{n}@test.com"
    end
    username { 'username' }
    password { 'password' }
    password_confirmation { 'password' }
  end
end
