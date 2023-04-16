export default function Command({ name }: Props) {
  return (
    <div class="bg-transparent h-10 w-[90%] flex flex-col mb-3 rounded-md text-center justify-center hover:commands">
      <p>{name}</p>
    </div>
  );
}

type Props = {
  name?: string;
};
