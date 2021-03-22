require 'rails_helper'

RSpec.describe User, type: :model do
  context 'relations' do
    it { have_many(:tweets) }
  end
end
