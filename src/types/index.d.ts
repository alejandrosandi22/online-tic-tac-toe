interface AppLayoutProps {
  children: React.ReactNode;
  title: string;
}

interface PortalProps {
  children: ReactNode;
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}
