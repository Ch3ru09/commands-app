export default function Command({ name }: Props) {
  return (
    <div class="commands hover:commands">
      <p>{name}</p>
    </div>
  );
}

type Props = {
  name?: string;
};
