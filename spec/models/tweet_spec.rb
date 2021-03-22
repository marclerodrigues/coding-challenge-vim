require 'rails_helper'

RSpec.describe Tweet, type: :model do
  context 'validations' do
    it { validate_presence_of(:body) }
  end

  context 'relations' do
    it { belong_to(:user) }
  end

  context 'scopes' do
    describe '.recently_created' do
      it 'returns records in the correct order' do
        first_tweet = create(:tweet, body: 'First')
        second_tweet = create(:tweet, body: 'Second')

        expect(Tweet.recently_created).to eq([second_tweet, first_tweet])
      end
    end

    describe '.with_users' do
      it 'returns records with associated username' do
        tweet = create(:tweet, body: 'Tweet')

        expected_result = {
          'body' => 'Tweet',
          'username' => 'username',
          'id' => tweet.id
        }

        expect(Tweet.with_users.first.as_json).to eq(expected_result)
      end
    end
  end
end
