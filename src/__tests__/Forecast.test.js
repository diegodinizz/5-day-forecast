import React from 'react'
import { mount, shallow } from 'enzyme';
import { Forecast } from '../components/Forecast';
import toJSON from 'enzyme-to-json';

const fakeForecast =  {
    date: "Monday",
    forecastIcon: "01n",
    tempMax: 12,
    tempMin: 7,
};

describe('<Forecast/>', () => {
    it('renders and matches the snapshot', () => {
      const wrapper = mount(<Forecast {...fakeForecast} />);
      expect(toJSON(wrapper)).toMatchSnapshot();
    });

    it('renders the correct day', () => {
        const wrapper = shallow(<Forecast {...fakeForecast} />);
        expect(wrapper.text().includes(fakeForecast.date)).toBe(true);
    });

    it('renders the correct icon properly', () => {
        const wrapper = shallow(<Forecast {...fakeForecast} />);
        const img = wrapper.find('img');
        expect(img.props().src).toContain(fakeForecast.forecastIcon);
    });
});
  