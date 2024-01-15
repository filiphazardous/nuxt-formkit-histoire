export default {
  // GLOBAL
  global: {
    outer:
      'formkit-disabled:opacity-50 formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none mb-gutter',
    label: 'font-paralucent text-lg formkit-invalid:text-error mb-2 block',
    legend: 'font-paralucent text-lg formkit-invalid:text-error mb-2 block',
    inner:
      'formkit-invalid:ring-error formkit-disabled:cursor-not-allowed formkit-disabled:pointer-events-none relative flex rounded-full bg-white ring-1 ring-border transition-shadow duration-300 ease-in-out focus-within:ring-1 focus-within:ring-border-focus hover:ring-border-focus',
    input:
      'formkit-prefix-icon:pl-2 formkit-suffix-icon:pr-2 h-11 w-full appearance-none rounded-full border-none bg-transparent px-5 py-2 text-base text-text placeholder-placeholder focus:shadow-none focus:outline-none focus:ring-0',
    help: 'mt-2 flex cursor-default items-start text-sm text-secondary-darker',
    messages: 'mb-0 mt-2 list-none text-sm',
    message: 'mb-2 text-error last-of-type:mb-0',
    prefixIcon:
      'formkit-disabled:text-placeholder flex shrink-0 grow-0 self-stretch pl-5 text-primary [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:w-full [&>svg]:max-w-[1em]',
    suffixIcon:
      'flex shrink-0 grow-0 self-stretch pr-5 text-primary [&>svg]:m-auto [&>svg]:max-h-[1em] [&>svg]:w-full [&>svg]:max-w-[1em]',
  },
  // TEXT
  'family:text': {
    inner: 'items-center',
  },
  // BUTTON
  'family:button': {
    outer: '$reset inline-block',
    input:
      '$reset font-paralucent shadow-hard-sm inline-flex h-11 cursor-pointer items-center justify-center whitespace-nowrap rounded-lg border-2 border-white bg-primary px-6 text-lg text-white transition-colors ease-in-out hover:bg-primary-dark focus-visible:bg-primary-dark focus-visible:outline-none focus-visible:ring focus-visible:ring-primary-dark',
    wrapper: 'mb-1',
    prefixIcon: '$reset stretch mr-3 block w-6',
    suffixIcon: '$reset stretch ml-3 block w-6',
  },
  // TEXTAREA
  textarea: {
    inner: 'rounded-large',
    input: 'rounded-large resize-none h-32',
    placeholder: 'pl-5',
  },
  // TOGGLE
  toggle: {
    altLabel:
      'font-paralucent text-md formkit-invalid:text-error mb-2 block w-full',
    inner: '$reset inline-block mr-2',
    input: 'peer pointer-events-none absolute opacity-0',
    label: '$reset font-paralucent text-md formkit-invalid:text-error block',
    innerLabel:
      'absolute left-full top-1/2 -translate-x-full -translate-y-1/2 px-1 text-[10px] font-bold',
    thumb:
      'relative left-0 aspect-square w-6 rounded-full bg-text transition-all',
    track:
      'shadow-inset-sm relative min-w-[56px] cursor-pointer rounded-full bg-border transition-all peer-checked:bg-secondary peer-checked:[&>div:first-child:not(:last-child)]:left-0 peer-checked:[&>div:first-child:not(:last-child)]:translate-x-0 peer-checked:[&>div:last-child]:left-full peer-checked:[&>div:last-child]:-translate-x-full peer-checked:[&>div:last-child]:bg-secondary-darker',
    valueLabel:
      '$reset font-paralucent formkit-invalid:text-error block text-sm',
    wrapper: 'mb-1 flex flex-wrap items-center',
  },
  'family:box': {
    help: 'mb-2 mt-1.5',
    input:
      '$reset peer pointer-events-none absolute left-[-999em] h-0 w-0 overflow-hidden rounded-full border-0 opacity-0 outline-0',
    inner: '$reset inline-block border-0 shadow-none',
    label: '$reset formkit-disabled:text-gray-400 select-none text-text',
    wrapper: 'mb-1 inline-flex cursor-pointer items-start',
    option: 'mb-5 last-of-type:mb-0',
    legend:
      '$reset font-paralucent text-lg formkit-invalid:text-error mb-gutter block',
  },
  checkbox: {
    decorator:
      'mt-1/2 relative mr-3 block h-5 w-5 rounded bg-white text-transparent ring-1 ring-border peer-checked:bg-primary peer-checked:text-white peer-focus:ring-2 peer-focus:ring-primary peer-checked:peer-focus:ring-primary-dark peer-checked:[&>span]:p-[2px]',
    decoratorIcon:
      'ease-back absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-2 transition-all duration-200',
  },
  radio: {
    decorator:
      'mt-1/2 relative mr-3 block h-5 w-5 rounded-full bg-white text-transparent ring-1 ring-border peer-checked:bg-white peer-checked:text-primary peer-focus:ring-2 peer-focus:ring-primary peer-checked:peer-focus:ring-primary-dark peer-checked:[&>span]:p-[2px]',
    decoratorIcon:
      'absolute left-1/2 top-1/2 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-2 transition-all ease-out',
  },
  radioAccordion: {
    input: '$reset',
    inner: '$reset',
  },
  feedbackButtons: {
    input: '$reset',
    inner: '$reset',
  },
};
