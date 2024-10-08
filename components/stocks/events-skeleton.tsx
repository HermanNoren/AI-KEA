const placeholderEvents = [
  {
    date: '2024-09-26',
    headline: 'Psst! Vi har smygöppnat julbutiken online',
    description:
      'Slipp en del av julstressen genom att hitta dina favoriter bland julpynt, julbelysning, ljusstakar och julgranar redan nu. På så sätt kan du njuta i lugn och ro av julen när den väl är här.'
  }
]

export const EventsSkeleton = () => {
  return (
    <div className="-mt-2 flex w-full flex-col gap-2 py-4">
      {placeholderEvents.map(event => (
        <div
          key={event.date}
          className="flex shrink-0 flex-col gap-1 rounded-lg bg-zinc-800 p-4"
        >
          <div className="w-fit rounded-md bg-zinc-700 text-sm text-transparent">
            {event.date}
          </div>
          <div className="w-fit rounded-md bg-zinc-700 text-transparent">
            {event.headline}
          </div>
          <div className="w-auto rounded-md bg-zinc-700 text-transparent">
            {event.description.slice(0, 70)}...
          </div>
        </div>
      ))}
    </div>
  )
}
