import { ReactNode } from 'react';

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
};

type WarningBoxProps = {
  mode: 'warning';
  severity: 'low' | 'medium' | 'high'; // means that this property is optional
  children: ReactNode;
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  if (props.mode === 'hint')
    return (
      <aside className={`infobox infobox-hint`}>
        <p>{props.children}</p>
      </aside>
    );

  return (
    <aside className={`infobox infobox-warning warning--${props.severity}`}>
      <h2>Warning</h2>
      <p>{props.children}</p>
    </aside>
  );
}
