
const groupsColors = [
  {
    "groupId": 1,
    "color": "#951608"
  },
  {
    "groupId": 2,
    "color": "#d5142d"
  },
  {
    "groupId": 3,
    "color": "#471190"
  },
  {
    "groupId": 4,
    "color": "#4143c3"
  },
  {
    "groupId": 5,
    "color": "#19721c"
  },
  {
    "groupId": 6,
    "color": "#672f7a"
  },
  {
    "groupId": 7,
    "color": "#f0c23d"
  },
  {
    "groupId": 8,
    "color": "#bab0a8"
  },
  {
    "groupId": 9,
    "color": "#8d43d3"
  },
  {
    "groupId": 10,
    "color": "#da5a2b"
  },
  {
    "groupId": 11,
    "color": "#bd196d"
  },
  {
    "groupId": 12,
    "color": "#049195"
  }
]

export const randomFunctionSelectGroupId = () => {
  return Math.ceil(Math.random() * (12 - 1) + 1)
}

export const validateColorGroup = (groupId) => {

  const color = groupsColors.filter(group => {
    return group.groupId == groupId
  })

  return color.length > 0 ? color[0].color : 'var(--white)'

}