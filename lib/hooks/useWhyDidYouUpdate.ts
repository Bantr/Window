import * as React from 'react';

// Performance hook to see which props cause a rerender of the component.
// TODO: Check if props type could be more defined.
export function useWhyDidYouUpdate(name: string, props: any): void {
  const previousProps = React.useRef<HTMLElement>();

  React.useEffect(() => {
    if (previousProps.current) {
      // get all keys from previous and current props.
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props.
      const changes = {};

      allKeys.forEach((key) => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // add to changesObj
          changes[key] = {
            from: previousProps.current[key],
            to: props[key]
          };
        }
      });

      // If changes is not empty then output to console.
      if (Object.keys(changes).length) {
        // eslint-disable-next-line
        console.log('[why-did-you-update]', name, changes);
      }
    }
    // Finally update previousProps with current props for next hook call.
    previousProps.current = props;
  });
}
