import { Workout } from '../entities/workout.entity'
import { WeekDays } from '../../_data-builders/types/week-days.enum'
import { FontSize } from '../../../design-system/enums/font-size.enum'
import { Margin } from '../../../design-system/enums/margin.enum'
import { Padding } from '../../../design-system/enums/padding.enum'
import { StyleSheet } from 'react-native'

function isDayScheduled(workout: Workout, weekDay: WeekDays, index: number) {
  return (
    workout.scheduleDays!.includes(weekDay) &&
    index === Object.keys(WeekDays).indexOf(weekDay)
  )
}

export function determineDayInitialStyle(workout: Workout, index: number) {
  let dayInitialStyle = [styles.dayInitial] as {}[]

  if (!workout.scheduleDays) return dayInitialStyle

  const weekDays = Object.keys(WeekDays) as Array<keyof typeof WeekDays>

  weekDays.forEach((weekDay) => {
    if (isDayScheduled(workout, weekDay as WeekDays, index))
      dayInitialStyle.push(styles.scheduledDayInitial)
  })

  return dayInitialStyle
}

const styles = StyleSheet.create({
  dayInitial: {
    fontSize: FontSize.BODY_TEXT_EXTRA_SMALL,
    fontWeight: 'bold',
    backgroundColor: 'gray',
    color: 'white',
    textTransform: 'uppercase',
    margin: Margin.SMALL,
    marginLeft: Margin.NONE,
    marginBottom: Margin.NONE,
    padding: Padding.EXTRA_SMALL,
    borderRadius: 2,
    width: 15,
    textAlign: 'center',
  },
  scheduledDayInitial: {
    backgroundColor: 'green',
  },
})
