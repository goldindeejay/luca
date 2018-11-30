import { convertAbility } from '../battleActions';

describe('battleActions', () => {
  describe('convertAbility', () => {
    it('converts simple character abilities', () => {
      const ability = convertAbility({
        category_id: '17',
        options: {
          ability_animation_id: '10267',
          active_target_method: '3',
          alias_name: '',
          arg1: '75',
          arg10: '0',
          arg11: '0',
          arg12: '0',
          arg13: '0',
          arg14: '0',
          arg15: '0',
          arg16: '0',
          arg17: '0',
          arg18: '0',
          arg19: '0',
          arg2: '4',
          arg20: '0',
          arg21: '0',
          arg22: '0',
          arg23: '0',
          arg24: '0',
          arg25: '0',
          arg26: '0',
          arg27: '0',
          arg28: '0',
          arg29: '0',
          arg3: '1',
          arg30: '0',
          arg4: '0',
          arg5: '107',
          arg6: '1',
          arg7: '20',
          arg8: '0',
          arg9: '0',
          cast_time: '1650',
          counter_enable: '1',
          max_damage_threshold_type: '0',
          min_damage_threshold_type: '0',
          name: 'Dread Weapon',
          panel_name: 'Dread{n}Weapon',
          ss_point: '75',
          status_ailments_factor: '0',
          status_ailments_id: '0',
          target_death: '1',
          target_method: '2',
          target_range: '1',
          target_segment: '1',
        },
        exercise_type: '1',
        action_id: '126',
        ability_id: '30271101',
      });
      expect(ability).toMatchSnapshot();
    });
  });
});