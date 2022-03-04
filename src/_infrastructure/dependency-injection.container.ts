import { InMemoryProgramGateway } from '../create-program/gateways/program.in-memory.gateway'
import { ProgramGateway } from '../create-program/gateways/program.gateway.interface'
import { WorkoutGateway } from '../create-program/gateways/workout.gateway.interface'
import { InMemoryWorkoutGateway } from '../create-program/gateways/workout.in-memory.gateway'
import { ExerciseGateway } from '../create-program/gateways/exercise.gateway.interface'
import { ExerciseGraphqlGateway } from '../create-program/gateways/exercise.graphql.gateway'
import { LoginGateway } from '../login/login.gateway.interface'
import { LoginGraphqlGateway } from '../login/dependency-injection.container'
import { Login } from '../create-program/entities/login.entity'
import AsyncStorage from '@react-native-community/async-storage'


export const programGateway: ProgramGateway = new InMemoryProgramGateway()
export const workoutGateway: WorkoutGateway = new InMemoryWorkoutGateway(
  programGateway,
)
export const exerciseGateway: ExerciseGateway = new ExerciseGraphqlGateway()

export const loginGateway: LoginGateway = new LoginGraphqlGateway()

loginGateway.login({
  email: 'Aliyah_Rippin64@hotmail.com',
  password: '$2b$10$JsRFxroTkMbSUJYHNzZm..mJbqqaR0cAUefX4Fo1mdZzM34oy97CC',
}).then(token =>
  AsyncStorage.setItem('token', token))
