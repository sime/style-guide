import React from 'react';
import {shallow, mount} from 'enzyme';
import Icon from 'icons/Icon';
import Rating from './Rating';
import RateCounter from './subcomponents/RateCounter';
import Star from './subcomponents/Star';

describe('rating', () => {
  it('render', () => {
    const rating = shallow(
      <Rating />
    );

    expect(rating.hasClass('sg-rate-box')).toEqual(true);
  });

  it('shouldn\'t throw error when no onChange', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    shallow(<Rating />);
    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  it('active', () => {
    const rating = shallow(
      <Rating active />
    );

    expect(rating.hasClass('sg-rate-box--active')).toEqual(true);
  });

  it('render stars - defined metricSize', () => {
    const metricSize = 8;
    const rating = shallow(
      <Rating active metricSize={metricSize} />
    );

    expect(rating.find(Star)).toHaveLength(metricSize);
  });

  it('render stars - default number of stars', () => {
    const defaultMetricSize = 5;
    const rating = shallow(
      <Rating />
    );

    expect(rating.find(Star)).toHaveLength(defaultMetricSize);
  });

  it('rate', () => {
    const rate = 3;
    const rating = shallow(
      <Rating rate={rate} />
    );
    const stars = rating.find(Star);
    let checkedStars = 0;

    stars.forEach(star => {
      if (star.props().checked) {
        checkedStars++;
      }
    });

    expect(checkedStars).toEqual(rate);
  });

  it('onchange not working when no active', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = mount(
      <Rating rate={rate} onChange={onChange} />
    );
    const stars = rating.find(Star);

    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(0);
  });

  it('onchange', () => {
    const onChange = jest.fn();
    const rate = 3;
    const rating = mount(
      <Rating rate={rate} onChange={onChange} active />
    );
    const stars = rating.find(Star);

    expect(onChange.mock.calls).toHaveLength(0);

    stars.at(0).simulate('click');
    expect(onChange.mock.calls).toHaveLength(1);

    stars.at(1).simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);

    const lastRatedStarIndex = rate - 1;

    //shouldn't call onChange when same rate clicked
    stars.at(lastRatedStarIndex).simulate('click');
    expect(onChange.mock.calls).toHaveLength(2);
  });

  it('clicking not defined on change not throw errors', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();

    const rate = 3;
    const rating = mount(
      <Rating rate={rate} active />
    );
    const stars = rating.find(Star);

    stars.at(0).simulate('click');
    stars.at(1).simulate('click');

    const lastRatedStarIndex = rate - 1;

    stars.at(lastRatedStarIndex).simulate('click');

    expect(console.error.mock.calls).toHaveLength(0);

    spy.mockRestore();
  });

  it('small', () => {
    const sizeOfSmallStar = 14;
    const rating = shallow(
      <Rating small />
    );
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--small')).toEqual(true);

    stars.forEach(star => {
      expect(star.props().size).toEqual(sizeOfSmallStar);
    });
  });

  it('no small', () => {
    const sizeOfNormalStar = 16;
    const rating = shallow(
      <Rating />
    );
    const stars = rating.find(Star);

    expect(rating.hasClass('sg-rate-box--small')).toEqual(false);

    stars.forEach(star => {
      expect(star.props().size).toEqual(sizeOfNormalStar);
    });
  });

  describe('counter text', () => {
    it('exist', () => {
      const rating = shallow(
        <Rating />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter).toHaveLength(1);
    });

    it('displays active text when active and haven\'t been rated', () => {
      const rating = shallow(
        <Rating active />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeTruthy();
    });

    it('displays counter text when no active and haven\'t been rated', () => {
      const rating = shallow(
        <Rating />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    it('displays counter text when have been rated and no active', () => {
      const rating = shallow(
        <Rating rate={3} />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    it('displays counter text when have been rated and active', () => {
      const rating = shallow(
        <Rating rate={3} active />
      );
      const rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    // check if let is needed, looks like a bug on enzyme side
    it('displays active text when active and mouse over stars', () => {
      const rating = mount(
        <Rating rate={3} active />
      );
      const stars = rating.find('.sg-rate-box__stars');
      let rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();

      stars.simulate('mouseEnter');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeTruthy();

      stars.simulate('mouseLeave');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    });

    // should be near same as above, so if we let delete above we need delete it here
    it('no displays active text when no active and mouse over stars', () => {
      const rating = mount(
        <Rating rate={3} />
      );
      const stars = rating.find('.sg-rate-box__stars');
      let rateCounter = rating.find(RateCounter);

      expect(rateCounter.props().showActiveText).toBeFalsy();

      stars.simulate('mouseEnter');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();

      stars.simulate('mouseLeave');
      rateCounter = rating.find(RateCounter);
      expect(rateCounter.props().showActiveText).toBeFalsy();
    });
  });
});

describe('star', () => {
  it('render', () => {
    const star = shallow(
      <Star onClick={jest.fn()} />
    );

    expect(star.hasClass('sg-rate-box__star')).toEqual(true);
  });

  it('Star use Icon component', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={jest.fn()} />
    );

    expect(star.find(Icon)).toHaveLength(1);
  });

  it('click working', () => {
    const onClick = jest.fn();
    const star = shallow(<Star onClick={onClick} />);

    expect(onClick.mock.calls).toHaveLength(0);

    star.simulate('click');
    expect(onClick.mock.calls).toHaveLength(1);
  });

  it('should throw error when no onClick', () => {
    const spy = jest.spyOn(console, 'error');

    console.error = jest.fn();
    mount(<Star />);

    expect(console.error.mock.calls).toHaveLength(1);

    spy.mockRestore();
  });

  it('checked', () => {
    const star = shallow(
      <Star checked onClick={jest.fn()} />
    );

    expect(star.hasClass('sg-rate-box__star--checked')).toEqual(true);
  });

  it('pass size to icon', () => {
    const size = 16;
    const star = shallow(
      <Star size={size} onClick={jest.fn()} />
    );

    const icon = star.find(Icon);

    expect(icon.props().size).toEqual(size);
  });
});
