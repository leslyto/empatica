import React from 'react';
import Header from './Header';
import Orders from './Orders';
import Order from './Order';
import Items from './Items';
import Login from './Login';
import { BrowserRouter as Router } from "react-router-dom";
import { mount, shallow } from 'enzyme';
import renderer, { act } from 'react-test-renderer';
import axios from 'axios';

describe("Header", () => {
  it('renders', () => {
    const wrapper = shallow(<Header />)
    expect(wrapper.exists()).toEqual(true)
  })
})

describe("Orders", () => {
  it('renders', () => {
    const wrapper = shallow(<Orders />)
    expect(wrapper.exists()).toEqual(true)
  })
  
  it('show user orders if user is authenticated', () => {
    const wrapper = mount(<Router><Orders authenticatedUserId={1}/></Router>).find(Orders)
    expect(wrapper.find('.orders').exists()).toEqual(true)
  })

  it('redirects to login if user is not authenticated', () => {
    const wrapper = mount(<Router><Orders authenticatedUserId={null}/></Router>).find(Orders)
    expect(wrapper.find('.orders').exists()).toEqual(false)
  })

  it('make successful axios requests with correct URLs', async () => {
    const props = {
      authenticatedUserId: 1
    };
    const axiosGetSpy = jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: { id: 1 } });

    let component;
    await act(async () => {
      component = renderer.create(<Router><Orders {...props}/></Router>);
    });

    // act(() => {
    //   render(<Router><Orders {...props}/></Router>, component);
    // });
    expect(axiosGetSpy).toHaveBeenCalledTimes(2);
    expect(axiosGetSpy.mock.calls).toEqual([
      [`http://localhost:3001/users/${props.authenticatedUserId}/orders`],
      [`http://localhost:3001/users/${props.authenticatedUserId}/`]
    ]);
  });
})

describe("Login", () => {  
  it('renders', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper.exists()).toEqual(true)
  })
})

describe("Items", () => {  
  const props = {
    items: [
      {
        amount: 249,
        name: "Embrace Watch - Stretchable Band Black"
      }
    ],
    setOrderPrice: jest.fn()
  }

  it('renders item name and price correctly', () => {
    const wrapper = mount(<Items {...props}/>)
    expect(wrapper.exists()).toEqual(true)
    expect(wrapper.find('p').text()).toBe('Embrace Watch - Stretchable Band Black - $249')
  })
})

describe("Order", () => {  
  const props = {
    order: {
      discounts: [{
        name: "Christmas 2018 - 10% OFF",
        type: "percent",
        value: 10
      }],
      id: 1,
      items: [],
      status: "paid",
      tracking: {}
    }
  };

  let wrapper
  beforeEach(() => {
    wrapper = mount(<Order {...props}/>)
  });

  it('renders', () => {
    expect(wrapper.exists()).toEqual(true)
  })

  it('Change status to cancelled when cancel order button is clicked', async () => {
    const axiosDeleteSpy = jest.spyOn(axios, 'delete').mockResolvedValueOnce({ data: { order: { id: 1 }, status: "cancelled" }});
    const button = wrapper.find('#cancel-btn');
    button.simulate('click');
    await act(async () => {
      Promise.resolve();
    })
    expect(axiosDeleteSpy).toHaveBeenCalledTimes(1);
    expect(wrapper.find('#status').text()).toBe('Status: CANCELLED');
  })
})
