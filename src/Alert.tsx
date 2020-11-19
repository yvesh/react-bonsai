import * as React from 'react';
import { useState } from 'react';

type AlertAction = (e: React.MouseEvent<HTMLDivElement>) => void;

interface Props {
  children?: React.ReactChild | React.ReactChild[];
  action?: AlertAction;
  variant?:
    | 'primary'
    | 'secondary'
    | 'white'
    | 'grey'
    | 'black'
    | 'green'
    | 'blue'
    | 'orange'
    | 'red';
  className?: string;
  style?: React.CSSProperties;
  isDismissible?: boolean;
}

export const Alert = (props: Props) => {
  const [visible, setVisible] = useState(true);

  const handleDismissClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();

    setVisible(false);
  };

  const style: React.CSSProperties = {
    '--d': visible ? 'block' : 'none',
    '--pos': 'relative',
    '--br': '5px',
    '--c': '#fff',
    '--bgc': `var(--${props.variant || 'blue'})`,
    '--p': '10px 20px',
    '--my': '10px',
    ...props.style,
  };

  return (
    <div className={props.className} style={style} onClick={props.action}>
      {props.children}
      {props.isDismissible && (
        <span
          style={{
            '--pos': 'absolute',
            '--top': '50%',
            '--right': '10px',
            '--cur': 'pointer',
            // TODO Replace with transform helpers in next release
            transform: 'translateY(-50%)',
          }}
          onClick={handleDismissClick}
        >
          x
        </span>
      )}
    </div>
  );
};

export default Alert;
