import 'styled-components/native';
import {Theme} from '../theme/BaseTheme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}
