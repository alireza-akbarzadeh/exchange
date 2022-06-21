interface ISpinnerProps {
  className: string;
}

const Spinner = ({ className }: ISpinnerProps) => {
  return (
    <div
      style={{ borderTopColor: "transparent" }}
      className={` border-solid rounded-full animate-spin ${className}`}
    ></div>
  );
};

export default Spinner;
