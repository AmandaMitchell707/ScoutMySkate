require 'test_helper'

class SkateRoutesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get skate_routes_index_url
    assert_response :success
  end

  test "should get show" do
    get skate_routes_show_url
    assert_response :success
  end

end
