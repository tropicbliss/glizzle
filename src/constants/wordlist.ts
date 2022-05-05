const RAW_WORDS = [
  'coffee',
  'glizzy',
  'boomer',
  'atrioc',
  'zoomer',
  'twitch',
  'nvidia',
  'crinky',
  'hitman',
  'weeeel',
  'advert',
  'market',
  'whodat',
  'ludwig',
  'atroic',
  'btrioc',
  'crinky',
  'quincy',
  'frames',
  'monday',
  'atrion',
  'hotdog',
  'finger',
  'magnus',
  'hollow',
  'knight',
  'yummer',
  'linkus',
  'league',
  'stanzy',
  'sigmas',
  'cronch',
  'virgin',
  'cringe',
  'morbin',
  'gambit',
  'burgzy',
  'clowns',
  'amogus',
  'factor',
  'darren',
  'quadge',
  'dwayne',
  'sekiro',
  'public',
  'shanty',
  'wordle',
  'reddit',
  'grinds',
  'negneg',
  'rocist',
  'fizics',
  'senile',
  'sharks',
  'glocal',
  'crypto',
  'goblin',
  'brands',
  'sheesh',
]

export let WORDS = RAW_WORDS.filter(function (elem, index, self) {
  return index === self.indexOf(elem)
})
