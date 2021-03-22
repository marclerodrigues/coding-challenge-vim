require 'rails_helper'

RSpec.describe 'Tweets', type: :request do
  describe 'lists tweets' do
    context 'when is a new user' do
      before do
        create_list(:tweet, 2, body: 'Tweet')

        get '/tweets'

        @parsed_body= JSON.parse(response.body)
      end

      it 'returns all records' do
        expect(@parsed_body["tweets"].length).to eq(2)
      end

      it 'returns records with the correct attributes' do
        attributes = @parsed_body["tweets"].first.keys
        expected_attributes = ["id", "body", "username"]
        expect(attributes).to eq(expected_attributes)
      end
    end
  end
end
