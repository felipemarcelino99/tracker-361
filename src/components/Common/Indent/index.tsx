type IndentProps = {
  children: React.ReactNode;
};

export default function Indent({ children }: IndentProps) {
  return (
    <div className="indent" data-testid="indent">
      {children}
    </div>
  );
}
