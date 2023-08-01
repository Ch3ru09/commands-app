export default function Command({ name }: Props) {
  return (
    <div class="commands hover:commands" onclick={() => {}}>
      <p>{name}</p>
    </div>
  );
}

type Props = {
  name?: string;
};

