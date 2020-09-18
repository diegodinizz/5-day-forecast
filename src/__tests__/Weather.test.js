import React from "react";
import { shallow } from 'enzyme';
import { Weather } from '../components/Weather';

describe("<Weather />", () => {
    it("renders", async () => {
        const wrapper = shallow(<Weather />);
        expect(wrapper.exists()).toBe(true);
    });
    // TODO: Mock useFetch custom hook with fake values for in depth testing
});