import * as React from 'react';
import { Title, Paragraph, ComingSoon, InfoTooltip } from 'lib/components';
import { Container, Inner, SelectContainer } from './style';
import { Select } from 'lib/components/form';
import { useTheme } from 'lib/hooks';
import { THEME } from 'lib/enums';

export const Theme: React.FC = () => {
  const { changeTheme } = useTheme();

  // get Theme from local storage. This should be fast enough to not be called in useEffect hook.
  const jsonStringTheme = window.localStorage.getItem('theme');
  const themeObj: { theme: THEME } = JSON.parse(jsonStringTheme);

  const tooltipText = 'I provided a few custom themes, but I am not a professional designer. If you would like some extra custom themes. Join our discord and request a theme! We will definitely add it!';

  // Wrapper function to cast val from string to THEME.
  function setTheme(val: string) {
    changeTheme(val as THEME);
  }

  return (
    <Container>
      <Title size="medium" type="h4">Theme</Title>
      <Paragraph>Don&apos;t like the current colour palette? Pick another theme! <InfoTooltip content={tooltipText} /></Paragraph>
      <Inner>
        <div>Select your theme</div>
        <SelectContainer>
          <Select
            defaultSelectedValue={themeObj ? themeObj.theme : 'default'}
            name="theme-select"
            onChange={setTheme}
            ref={null}
            values={Object.values(THEME)}
          />
        </SelectContainer>
      </Inner>

      <Title size="medium" type="h4">Create your own theme</Title>
      <Paragraph>Not happy with what we offer? No problem create a better theme and show us your big designer brain!</Paragraph>
      <Inner>
        <div>Select your colours</div>
        <ComingSoon />
      </Inner>
    </Container>
  );
};
