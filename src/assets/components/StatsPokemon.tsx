type Pokemon = {
  stats: {
    base_stat: number;
    effort: number;
    stat: {
      name: string;
      url: string;
    };
  }[];
};

export default function StatsPokemon(props: Pokemon) {
  return (
    <div className="flex flex-col gap-4 min-w-[440px] shadow-lg rounded-lg p-8">
      <ul className="flex flex-col gap-4">
        {props.stats.map((stat) => {
          return (
            <li className="flex flex-row justify-between items-center">
              <p className="text-lg text-gray-400">{stat.stat.name}</p>
              <p className="text-lg">{stat.base_stat}</p>
            </li>
          );
        })}
        <li className="flex flex-row justify-between items-center">
          <p className="text-lg text-gray-400">Total</p>
          <p className="text-lg">
            {props.stats.reduce((a, b) => a + b.base_stat, 0)}
          </p>
        </li>
      </ul>
    </div>
  );
}
