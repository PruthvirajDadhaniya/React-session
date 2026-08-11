import { UserCardDestructured, UserCardProps } from "./02-props-receive";

function PropsBasics() {
  return (
    <>
      <UserCardProps name="John Deo" isActive={true} />
      <UserCardDestructured name="John Deo" isActive={true} />
    </>
  );
}
export default PropsBasics;
