// @flow strict

import * as React from 'react';
import CounterM from '../../Counter';

export type IconTypeType =
  | 'academic_cap'
  | 'all_questions'
  | 'answer'
  | 'arrow_double_down'
  | 'arrow_down'
  | 'arrow_left'
  | 'arrow_right'
  | 'arrow_up'
  | 'ask_parent_to_pay'
  | 'attachment'
  | 'bell_checked'
  | 'bell_outlined'
  | 'bold'
  | 'bulleted_list'
  | 'calendar'
  | 'camera'
  | 'check'
  | 'clipboard'
  | 'close'
  | 'comment'
  | 'comment_outlined'
  | 'counter'
  | 'credit_card'
  | 'crown_outlined'
  | 'equation'
  | 'excellent'
  | 'exclamation_mark'
  | 'facebook'
  | 'friend_add'
  | 'friend_remove'
  | 'friend_pending'
  | 'friend_checked'
  | 'friends'
  | 'fullscreen'
  | 'heading'
  | 'heart'
  | 'heart_outlined'
  | 'image'
  | 'influence'
  | 'instagram'
  | 'italic'
  | 'less'
  | 'linkedin'
  | 'lock_with_play'
  | 'logout'
  | 'medium'
  | 'menu'
  | 'messages'
  | 'mic'
  | 'money_transfer'
  | 'add_more'
  | 'notifications'
  | 'numbered_list'
  | 'open_in_new_tab'
  | 'padlock'
  | 'pencil'
  | 'play'
  | 'plus'
  | 'points'
  | 'profile'
  | 'profile_view'
  | 'question'
  | 'recent_questions'
  | 'reload'
  | 'report_flag'
  | 'report_flag_outlined'
  | 'rotate'
  | 'rotate_90'
  | 'search'
  | 'seen'
  | 'settings'
  | 'share'
  | 'sms'
  | 'star'
  | 'star_half'
  | 'star_half_outlined'
  | 'star_outlined'
  | 'subtitle'
  | 'symbols'
  | 'title'
  | 'toughest_questions'
  | 'trash'
  | 'twitter'
  | 'underlined'
  | 'unseen'
  | 'verified'
  | 'warning'
  | 'youtube'
  | 'arrow_top_right'
  | 'circle'
  | 'crop'
  | 'cyrillic'
  | 'draw'
  | 'drawing_mode'
  | 'european'
  | 'greek'
  | 'highlight'
  | 'line'
  | 'more'
  | 'pause'
  | 'rectangle'
  | 'sup_sub'
  | 'triangle'
  | 'pi'
  | 'quote'
  | 'spark';

type CounterSizeType = 'xs' | 'xxs';

export const COUNTER_SIZE = Object.freeze({
  XS: 'xs',
  XXS: 'xxs',
});

export type CounterPropsType = {
  /**
   * Children to be rendered inside Counter
   * @example <Counter type="basic">
   *            text
   *          </Counter>
   */
  children: React$Node,
  /**
   * Specify type of the counter that you want to use, two types for now
   * @example <Counter type="basic">
   *            1
   *          </Counter>
   * @see type="basic" https://styleguide.brainly.com/latest/docs/interactive.html?type="basic"#counters
   * @see type="points" https://styleguide.brainly.com/latest/docs/interactive.html?type="points"#counters
   */
  icon?: ?IconTypeType,
  /**
   * There are two sizes options for counters, not need to be specify, default is xs
   * @example <Counter icon="points">
   *            1pts
   *          </Counter>
   */
  size?: ?CounterSizeType,
  /**
   * Optional boolean for counter with animation
   * @example <Counter type="basic" withAnimation>
   *            12
   *          </Counter>
   */
  withAnimation?: boolean,
  /**
   * Additional class names
   */
  className?: string,
  ...
};

const Counter = (props: CounterPropsType) => {
  return <CounterM {...props} />;
};

export default Counter;
