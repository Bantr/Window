export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ban_type_enum: any;
  bomb_status_type_enum: any;
  date: any;
  player_info_weapon_enum: any;
  round_endreason_enum: any;
  team_startingside_enum: any;
  timestamp: any;
  utility_activated_type_enum: any;
  utility_thrown_type_enum: any;
  weapon_status_weapon_enum: any;
};

/** expression to compare columns of type Boolean. All fields are combined with logical 'AND'. */
export type IBooleanComparisonExp = {
  _eq?: Maybe<Scalars['Boolean']>;
  _gt?: Maybe<Scalars['Boolean']>;
  _gte?: Maybe<Scalars['Boolean']>;
  _in?: Maybe<Array<Scalars['Boolean']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Boolean']>;
  _lte?: Maybe<Scalars['Boolean']>;
  _neq?: Maybe<Scalars['Boolean']>;
  _nin?: Maybe<Array<Scalars['Boolean']>>;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type IIntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type IStringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "ban" */
export type IBan = {
  detectedAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  player?: Maybe<IPlayer>;
  playerId?: Maybe<Scalars['Int']>;
  preExisting: Scalars['Boolean'];
  type: Scalars['ban_type_enum'];
  unbanned: Scalars['Boolean'];
  unbannedAt?: Maybe<Scalars['timestamp']>;
};

/** aggregated selection of "ban" */
export type IBanAggregate = {
  aggregate?: Maybe<IBanAggregateFields>;
  nodes: Array<IBan>;
};

/** aggregate fields of "ban" */
export type IBanAggregateFields = {
  avg?: Maybe<IBanAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IBanMaxFields>;
  min?: Maybe<IBanMinFields>;
  stddev?: Maybe<IBanStddevFields>;
  stddev_pop?: Maybe<IBanStddevPopFields>;
  stddev_samp?: Maybe<IBanStddevSampFields>;
  sum?: Maybe<IBanSumFields>;
  var_pop?: Maybe<IBanVarPopFields>;
  var_samp?: Maybe<IBanVarSampFields>;
  variance?: Maybe<IBanVarianceFields>;
};


/** aggregate fields of "ban" */
export type IBanAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IBanSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ban" */
export type IBanAggregateOrderBy = {
  avg?: Maybe<IBanAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IBanMaxOrderBy>;
  min?: Maybe<IBanMinOrderBy>;
  stddev?: Maybe<IBanStddevOrderBy>;
  stddev_pop?: Maybe<IBanStddevPopOrderBy>;
  stddev_samp?: Maybe<IBanStddevSampOrderBy>;
  sum?: Maybe<IBanSumOrderBy>;
  var_pop?: Maybe<IBanVarPopOrderBy>;
  var_samp?: Maybe<IBanVarSampOrderBy>;
  variance?: Maybe<IBanVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IBanAvgFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ban" */
export type IBanAvgOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "ban". All fields are combined with a logical 'AND'. */
export type IBanBoolExp = {
  _and?: Maybe<Array<Maybe<IBanBoolExp>>>;
  _not?: Maybe<IBanBoolExp>;
  _or?: Maybe<Array<Maybe<IBanBoolExp>>>;
  detectedAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  preExisting?: Maybe<IBooleanComparisonExp>;
  type?: Maybe<IBanTypeEnumComparisonExp>;
  unbanned?: Maybe<IBooleanComparisonExp>;
  unbannedAt?: Maybe<ITimestampComparisonExp>;
};

/** aggregate max on columns */
export type IBanMaxFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "ban" */
export type IBanMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IBanMinFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "ban" */
export type IBanMinOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "ban" */
export type IBanOrderBy = {
  detectedAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
  preExisting?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
  unbanned?: Maybe<IOrderBy>;
  unbannedAt?: Maybe<IOrderBy>;
};

/** select columns of table "ban" */
export const enum IBanSelectColumn {
  /** column name */
  DetectedAt = 'detectedAt',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  PreExisting = 'preExisting',
  /** column name */
  Type = 'type',
  /** column name */
  Unbanned = 'unbanned',
  /** column name */
  UnbannedAt = 'unbannedAt'
};

/** aggregate stddev on columns */
export type IBanStddevFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ban" */
export type IBanStddevOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IBanStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ban" */
export type IBanStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IBanStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ban" */
export type IBanStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IBanSumFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ban" */
export type IBanSumOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};


/** expression to compare columns of type ban_type_enum. All fields are combined with logical 'AND'. */
export type IBanTypeEnumComparisonExp = {
  _eq?: Maybe<Scalars['ban_type_enum']>;
  _gt?: Maybe<Scalars['ban_type_enum']>;
  _gte?: Maybe<Scalars['ban_type_enum']>;
  _in?: Maybe<Array<Scalars['ban_type_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['ban_type_enum']>;
  _lte?: Maybe<Scalars['ban_type_enum']>;
  _neq?: Maybe<Scalars['ban_type_enum']>;
  _nin?: Maybe<Array<Scalars['ban_type_enum']>>;
};

/** aggregate var_pop on columns */
export type IBanVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ban" */
export type IBanVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IBanVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ban" */
export type IBanVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IBanVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ban" */
export type IBanVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** columns and relationships of "bomb_status" */
export type IBombStatus = {
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  playerId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  player_info?: Maybe<IPlayerInfo>;
  /** An object relationship */
  position?: Maybe<IPosition>;
  positionId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  type: Scalars['bomb_status_type_enum'];
};

/** aggregated selection of "bomb_status" */
export type IBombStatusAggregate = {
  aggregate?: Maybe<IBombStatusAggregateFields>;
  nodes: Array<IBombStatus>;
};

/** aggregate fields of "bomb_status" */
export type IBombStatusAggregateFields = {
  avg?: Maybe<IBombStatusAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IBombStatusMaxFields>;
  min?: Maybe<IBombStatusMinFields>;
  stddev?: Maybe<IBombStatusStddevFields>;
  stddev_pop?: Maybe<IBombStatusStddevPopFields>;
  stddev_samp?: Maybe<IBombStatusStddevSampFields>;
  sum?: Maybe<IBombStatusSumFields>;
  var_pop?: Maybe<IBombStatusVarPopFields>;
  var_samp?: Maybe<IBombStatusVarSampFields>;
  variance?: Maybe<IBombStatusVarianceFields>;
};


/** aggregate fields of "bomb_status" */
export type IBombStatusAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IBombStatusSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bomb_status" */
export type IBombStatusAggregateOrderBy = {
  avg?: Maybe<IBombStatusAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IBombStatusMaxOrderBy>;
  min?: Maybe<IBombStatusMinOrderBy>;
  stddev?: Maybe<IBombStatusStddevOrderBy>;
  stddev_pop?: Maybe<IBombStatusStddevPopOrderBy>;
  stddev_samp?: Maybe<IBombStatusStddevSampOrderBy>;
  sum?: Maybe<IBombStatusSumOrderBy>;
  var_pop?: Maybe<IBombStatusVarPopOrderBy>;
  var_samp?: Maybe<IBombStatusVarSampOrderBy>;
  variance?: Maybe<IBombStatusVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IBombStatusAvgFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bomb_status" */
export type IBombStatusAvgOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "bomb_status". All fields are combined with a logical 'AND'. */
export type IBombStatusBoolExp = {
  _and?: Maybe<Array<Maybe<IBombStatusBoolExp>>>;
  _not?: Maybe<IBombStatusBoolExp>;
  _or?: Maybe<Array<Maybe<IBombStatusBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  playerId?: Maybe<IIntComparisonExp>;
  player_info?: Maybe<IPlayerInfoBoolExp>;
  position?: Maybe<IPositionBoolExp>;
  positionId?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  type?: Maybe<IBombStatusTypeEnumComparisonExp>;
};

/** aggregate max on columns */
export type IBombStatusMaxFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "bomb_status" */
export type IBombStatusMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IBombStatusMinFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "bomb_status" */
export type IBombStatusMinOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "bomb_status" */
export type IBombStatusOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  player_info?: Maybe<IPlayerInfoOrderBy>;
  position?: Maybe<IPositionOrderBy>;
  positionId?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** select columns of table "bomb_status" */
export const enum IBombStatusSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick',
  /** column name */
  Type = 'type'
};

/** aggregate stddev on columns */
export type IBombStatusStddevFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bomb_status" */
export type IBombStatusStddevOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IBombStatusStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bomb_status" */
export type IBombStatusStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IBombStatusStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bomb_status" */
export type IBombStatusStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IBombStatusSumFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bomb_status" */
export type IBombStatusSumOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};


/** expression to compare columns of type bomb_status_type_enum. All fields are combined with logical 'AND'. */
export type IBombStatusTypeEnumComparisonExp = {
  _eq?: Maybe<Scalars['bomb_status_type_enum']>;
  _gt?: Maybe<Scalars['bomb_status_type_enum']>;
  _gte?: Maybe<Scalars['bomb_status_type_enum']>;
  _in?: Maybe<Array<Scalars['bomb_status_type_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bomb_status_type_enum']>;
  _lte?: Maybe<Scalars['bomb_status_type_enum']>;
  _neq?: Maybe<Scalars['bomb_status_type_enum']>;
  _nin?: Maybe<Array<Scalars['bomb_status_type_enum']>>;
};

/** aggregate var_pop on columns */
export type IBombStatusVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bomb_status" */
export type IBombStatusVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IBombStatusVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bomb_status" */
export type IBombStatusVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IBombStatusVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bomb_status" */
export type IBombStatusVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};


/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type IDateComparisonExp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "kill" */
export type IKill = {
  /** An object relationship */
  assister?: Maybe<IPlayerInfo>;
  assisterId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  attacker?: Maybe<IPlayerInfo>;
  attackerId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  throughSmoke: Scalars['Boolean'];
  throughWall: Scalars['Boolean'];
  tick: Scalars['Int'];
  /** An object relationship */
  victim?: Maybe<IPlayerInfo>;
  victimId?: Maybe<Scalars['Int']>;
  whileBlind: Scalars['Boolean'];
};

/** aggregated selection of "kill" */
export type IKillAggregate = {
  aggregate?: Maybe<IKillAggregateFields>;
  nodes: Array<IKill>;
};

/** aggregate fields of "kill" */
export type IKillAggregateFields = {
  avg?: Maybe<IKillAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IKillMaxFields>;
  min?: Maybe<IKillMinFields>;
  stddev?: Maybe<IKillStddevFields>;
  stddev_pop?: Maybe<IKillStddevPopFields>;
  stddev_samp?: Maybe<IKillStddevSampFields>;
  sum?: Maybe<IKillSumFields>;
  var_pop?: Maybe<IKillVarPopFields>;
  var_samp?: Maybe<IKillVarSampFields>;
  variance?: Maybe<IKillVarianceFields>;
};


/** aggregate fields of "kill" */
export type IKillAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IKillSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kill" */
export type IKillAggregateOrderBy = {
  avg?: Maybe<IKillAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IKillMaxOrderBy>;
  min?: Maybe<IKillMinOrderBy>;
  stddev?: Maybe<IKillStddevOrderBy>;
  stddev_pop?: Maybe<IKillStddevPopOrderBy>;
  stddev_samp?: Maybe<IKillStddevSampOrderBy>;
  sum?: Maybe<IKillSumOrderBy>;
  var_pop?: Maybe<IKillVarPopOrderBy>;
  var_samp?: Maybe<IKillVarSampOrderBy>;
  variance?: Maybe<IKillVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IKillAvgFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kill" */
export type IKillAvgOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "kill". All fields are combined with a logical 'AND'. */
export type IKillBoolExp = {
  _and?: Maybe<Array<Maybe<IKillBoolExp>>>;
  _not?: Maybe<IKillBoolExp>;
  _or?: Maybe<Array<Maybe<IKillBoolExp>>>;
  assister?: Maybe<IPlayerInfoBoolExp>;
  assisterId?: Maybe<IIntComparisonExp>;
  attacker?: Maybe<IPlayerInfoBoolExp>;
  attackerId?: Maybe<IIntComparisonExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  throughSmoke?: Maybe<IBooleanComparisonExp>;
  throughWall?: Maybe<IBooleanComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  victim?: Maybe<IPlayerInfoBoolExp>;
  victimId?: Maybe<IIntComparisonExp>;
  whileBlind?: Maybe<IBooleanComparisonExp>;
};

/** aggregate max on columns */
export type IKillMaxFields = {
  assisterId?: Maybe<Scalars['Int']>;
  attackerId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "kill" */
export type IKillMaxOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IKillMinFields = {
  assisterId?: Maybe<Scalars['Int']>;
  attackerId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "kill" */
export type IKillMinOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "kill" */
export type IKillOrderBy = {
  assister?: Maybe<IPlayerInfoOrderBy>;
  assisterId?: Maybe<IOrderBy>;
  attacker?: Maybe<IPlayerInfoOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  throughSmoke?: Maybe<IOrderBy>;
  throughWall?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victim?: Maybe<IPlayerInfoOrderBy>;
  victimId?: Maybe<IOrderBy>;
  whileBlind?: Maybe<IOrderBy>;
};

/** select columns of table "kill" */
export const enum IKillSelectColumn {
  /** column name */
  AssisterId = 'assisterId',
  /** column name */
  AttackerId = 'attackerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  ThroughSmoke = 'throughSmoke',
  /** column name */
  ThroughWall = 'throughWall',
  /** column name */
  Tick = 'tick',
  /** column name */
  VictimId = 'victimId',
  /** column name */
  WhileBlind = 'whileBlind'
};

/** aggregate stddev on columns */
export type IKillStddevFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kill" */
export type IKillStddevOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IKillStddevPopFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kill" */
export type IKillStddevPopOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IKillStddevSampFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kill" */
export type IKillStddevSampOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IKillSumFields = {
  assisterId?: Maybe<Scalars['Int']>;
  attackerId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "kill" */
export type IKillSumOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IKillVarPopFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kill" */
export type IKillVarPopOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IKillVarSampFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kill" */
export type IKillVarSampOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IKillVarianceFields = {
  assisterId?: Maybe<Scalars['Float']>;
  attackerId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kill" */
export type IKillVarianceOrderBy = {
  assisterId?: Maybe<IOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** columns and relationships of "match" */
export type IMatch = {
  date: Scalars['timestamp'];
  durationTicks?: Maybe<Scalars['Int']>;
  externalId: Scalars['String'];
  id: Scalars['Int'];
  map?: Maybe<Scalars['String']>;
  /** An array relationship */
  players: Array<IMatchPlayersPlayer>;
  /** An aggregated array relationship */
  players_aggregate: IMatchPlayersPlayerAggregate;
  /** An array relationship */
  rounds: Array<IRound>;
  /** An aggregated array relationship */
  rounds_aggregate: IRoundAggregate;
  /** An array relationship */
  team_matches_matches: Array<ITeamMatchesMatch>;
  /** An aggregated array relationship */
  team_matches_matches_aggregate: ITeamMatchesMatchAggregate;
  tickrate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  typeExtended?: Maybe<Scalars['String']>;
};


/** columns and relationships of "match" */
export type IMatchPlayersArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** columns and relationships of "match" */
export type IMatchPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** columns and relationships of "match" */
export type IMatchRoundsArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** columns and relationships of "match" */
export type IMatchRoundsAggregateArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** columns and relationships of "match" */
export type IMatchTeamMatchesMatchesArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};


/** columns and relationships of "match" */
export type IMatchTeamMatchesMatchesAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};

/** aggregated selection of "match" */
export type IMatchAggregate = {
  aggregate?: Maybe<IMatchAggregateFields>;
  nodes: Array<IMatch>;
};

/** aggregate fields of "match" */
export type IMatchAggregateFields = {
  avg?: Maybe<IMatchAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IMatchMaxFields>;
  min?: Maybe<IMatchMinFields>;
  stddev?: Maybe<IMatchStddevFields>;
  stddev_pop?: Maybe<IMatchStddevPopFields>;
  stddev_samp?: Maybe<IMatchStddevSampFields>;
  sum?: Maybe<IMatchSumFields>;
  var_pop?: Maybe<IMatchVarPopFields>;
  var_samp?: Maybe<IMatchVarSampFields>;
  variance?: Maybe<IMatchVarianceFields>;
};


/** aggregate fields of "match" */
export type IMatchAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IMatchSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "match" */
export type IMatchAggregateOrderBy = {
  avg?: Maybe<IMatchAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IMatchMaxOrderBy>;
  min?: Maybe<IMatchMinOrderBy>;
  stddev?: Maybe<IMatchStddevOrderBy>;
  stddev_pop?: Maybe<IMatchStddevPopOrderBy>;
  stddev_samp?: Maybe<IMatchStddevSampOrderBy>;
  sum?: Maybe<IMatchSumOrderBy>;
  var_pop?: Maybe<IMatchVarPopOrderBy>;
  var_samp?: Maybe<IMatchVarSampOrderBy>;
  variance?: Maybe<IMatchVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IMatchAvgFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "match" */
export type IMatchAvgOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "match". All fields are combined with a logical 'AND'. */
export type IMatchBoolExp = {
  _and?: Maybe<Array<Maybe<IMatchBoolExp>>>;
  _not?: Maybe<IMatchBoolExp>;
  _or?: Maybe<Array<Maybe<IMatchBoolExp>>>;
  date?: Maybe<ITimestampComparisonExp>;
  durationTicks?: Maybe<IIntComparisonExp>;
  externalId?: Maybe<IStringComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  map?: Maybe<IStringComparisonExp>;
  players?: Maybe<IMatchPlayersPlayerBoolExp>;
  rounds?: Maybe<IRoundBoolExp>;
  team_matches_matches?: Maybe<ITeamMatchesMatchBoolExp>;
  tickrate?: Maybe<IIntComparisonExp>;
  type?: Maybe<IIntComparisonExp>;
  typeExtended?: Maybe<IStringComparisonExp>;
};

/** aggregate max on columns */
export type IMatchMaxFields = {
  durationTicks?: Maybe<Scalars['Int']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  map?: Maybe<Scalars['String']>;
  tickrate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  typeExtended?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "match" */
export type IMatchMaxOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  externalId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  map?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
  typeExtended?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IMatchMinFields = {
  durationTicks?: Maybe<Scalars['Int']>;
  externalId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  map?: Maybe<Scalars['String']>;
  tickrate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
  typeExtended?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "match" */
export type IMatchMinOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  externalId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  map?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
  typeExtended?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "match" */
export type IMatchOrderBy = {
  date?: Maybe<IOrderBy>;
  durationTicks?: Maybe<IOrderBy>;
  externalId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  map?: Maybe<IOrderBy>;
  players_aggregate?: Maybe<IMatchPlayersPlayerAggregateOrderBy>;
  rounds_aggregate?: Maybe<IRoundAggregateOrderBy>;
  team_matches_matches_aggregate?: Maybe<ITeamMatchesMatchAggregateOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
  typeExtended?: Maybe<IOrderBy>;
};

/** columns and relationships of "match_players_player" */
export type IMatchPlayersPlayer = {
  /** An object relationship */
  match: IMatch;
  matchId: Scalars['Int'];
  /** An object relationship */
  player: IPlayer;
  playerId: Scalars['Int'];
};

/** aggregated selection of "match_players_player" */
export type IMatchPlayersPlayerAggregate = {
  aggregate?: Maybe<IMatchPlayersPlayerAggregateFields>;
  nodes: Array<IMatchPlayersPlayer>;
};

/** aggregate fields of "match_players_player" */
export type IMatchPlayersPlayerAggregateFields = {
  avg?: Maybe<IMatchPlayersPlayerAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IMatchPlayersPlayerMaxFields>;
  min?: Maybe<IMatchPlayersPlayerMinFields>;
  stddev?: Maybe<IMatchPlayersPlayerStddevFields>;
  stddev_pop?: Maybe<IMatchPlayersPlayerStddevPopFields>;
  stddev_samp?: Maybe<IMatchPlayersPlayerStddevSampFields>;
  sum?: Maybe<IMatchPlayersPlayerSumFields>;
  var_pop?: Maybe<IMatchPlayersPlayerVarPopFields>;
  var_samp?: Maybe<IMatchPlayersPlayerVarSampFields>;
  variance?: Maybe<IMatchPlayersPlayerVarianceFields>;
};


/** aggregate fields of "match_players_player" */
export type IMatchPlayersPlayerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "match_players_player" */
export type IMatchPlayersPlayerAggregateOrderBy = {
  avg?: Maybe<IMatchPlayersPlayerAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IMatchPlayersPlayerMaxOrderBy>;
  min?: Maybe<IMatchPlayersPlayerMinOrderBy>;
  stddev?: Maybe<IMatchPlayersPlayerStddevOrderBy>;
  stddev_pop?: Maybe<IMatchPlayersPlayerStddevPopOrderBy>;
  stddev_samp?: Maybe<IMatchPlayersPlayerStddevSampOrderBy>;
  sum?: Maybe<IMatchPlayersPlayerSumOrderBy>;
  var_pop?: Maybe<IMatchPlayersPlayerVarPopOrderBy>;
  var_samp?: Maybe<IMatchPlayersPlayerVarSampOrderBy>;
  variance?: Maybe<IMatchPlayersPlayerVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IMatchPlayersPlayerAvgFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "match_players_player" */
export type IMatchPlayersPlayerAvgOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "match_players_player". All fields are combined with a logical 'AND'. */
export type IMatchPlayersPlayerBoolExp = {
  _and?: Maybe<Array<Maybe<IMatchPlayersPlayerBoolExp>>>;
  _not?: Maybe<IMatchPlayersPlayerBoolExp>;
  _or?: Maybe<Array<Maybe<IMatchPlayersPlayerBoolExp>>>;
  match?: Maybe<IMatchBoolExp>;
  matchId?: Maybe<IIntComparisonExp>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IMatchPlayersPlayerMaxFields = {
  matchId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "match_players_player" */
export type IMatchPlayersPlayerMaxOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IMatchPlayersPlayerMinFields = {
  matchId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "match_players_player" */
export type IMatchPlayersPlayerMinOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "match_players_player" */
export type IMatchPlayersPlayerOrderBy = {
  match?: Maybe<IMatchOrderBy>;
  matchId?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** select columns of table "match_players_player" */
export const enum IMatchPlayersPlayerSelectColumn {
  /** column name */
  MatchId = 'matchId',
  /** column name */
  PlayerId = 'playerId'
};

/** aggregate stddev on columns */
export type IMatchPlayersPlayerStddevFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "match_players_player" */
export type IMatchPlayersPlayerStddevOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IMatchPlayersPlayerStddevPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "match_players_player" */
export type IMatchPlayersPlayerStddevPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IMatchPlayersPlayerStddevSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "match_players_player" */
export type IMatchPlayersPlayerStddevSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IMatchPlayersPlayerSumFields = {
  matchId?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "match_players_player" */
export type IMatchPlayersPlayerSumOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IMatchPlayersPlayerVarPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "match_players_player" */
export type IMatchPlayersPlayerVarPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IMatchPlayersPlayerVarSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "match_players_player" */
export type IMatchPlayersPlayerVarSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IMatchPlayersPlayerVarianceFields = {
  matchId?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "match_players_player" */
export type IMatchPlayersPlayerVarianceOrderBy = {
  matchId?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
};

/** select columns of table "match" */
export const enum IMatchSelectColumn {
  /** column name */
  Date = 'date',
  /** column name */
  DurationTicks = 'durationTicks',
  /** column name */
  ExternalId = 'externalId',
  /** column name */
  Id = 'id',
  /** column name */
  Map = 'map',
  /** column name */
  Tickrate = 'tickrate',
  /** column name */
  Type = 'type',
  /** column name */
  TypeExtended = 'typeExtended'
};

/** aggregate stddev on columns */
export type IMatchStddevFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "match" */
export type IMatchStddevOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IMatchStddevPopFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "match" */
export type IMatchStddevPopOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IMatchStddevSampFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "match" */
export type IMatchStddevSampOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IMatchSumFields = {
  durationTicks?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tickrate?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "match" */
export type IMatchSumOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** columns and relationships of "match_teams_team" */
export type IMatchTeamsTeam = {
  /** An object relationship */
  match: IMatch;
  matchId: Scalars['Int'];
  /** An object relationship */
  team: ITeam;
  teamId: Scalars['Int'];
};

/** aggregated selection of "match_teams_team" */
export type IMatchTeamsTeamAggregate = {
  aggregate?: Maybe<IMatchTeamsTeamAggregateFields>;
  nodes: Array<IMatchTeamsTeam>;
};

/** aggregate fields of "match_teams_team" */
export type IMatchTeamsTeamAggregateFields = {
  avg?: Maybe<IMatchTeamsTeamAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IMatchTeamsTeamMaxFields>;
  min?: Maybe<IMatchTeamsTeamMinFields>;
  stddev?: Maybe<IMatchTeamsTeamStddevFields>;
  stddev_pop?: Maybe<IMatchTeamsTeamStddevPopFields>;
  stddev_samp?: Maybe<IMatchTeamsTeamStddevSampFields>;
  sum?: Maybe<IMatchTeamsTeamSumFields>;
  var_pop?: Maybe<IMatchTeamsTeamVarPopFields>;
  var_samp?: Maybe<IMatchTeamsTeamVarSampFields>;
  variance?: Maybe<IMatchTeamsTeamVarianceFields>;
};


/** aggregate fields of "match_teams_team" */
export type IMatchTeamsTeamAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "match_teams_team" */
export type IMatchTeamsTeamAggregateOrderBy = {
  avg?: Maybe<IMatchTeamsTeamAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IMatchTeamsTeamMaxOrderBy>;
  min?: Maybe<IMatchTeamsTeamMinOrderBy>;
  stddev?: Maybe<IMatchTeamsTeamStddevOrderBy>;
  stddev_pop?: Maybe<IMatchTeamsTeamStddevPopOrderBy>;
  stddev_samp?: Maybe<IMatchTeamsTeamStddevSampOrderBy>;
  sum?: Maybe<IMatchTeamsTeamSumOrderBy>;
  var_pop?: Maybe<IMatchTeamsTeamVarPopOrderBy>;
  var_samp?: Maybe<IMatchTeamsTeamVarSampOrderBy>;
  variance?: Maybe<IMatchTeamsTeamVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IMatchTeamsTeamAvgFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "match_teams_team" */
export type IMatchTeamsTeamAvgOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "match_teams_team". All fields are combined with a logical 'AND'. */
export type IMatchTeamsTeamBoolExp = {
  _and?: Maybe<Array<Maybe<IMatchTeamsTeamBoolExp>>>;
  _not?: Maybe<IMatchTeamsTeamBoolExp>;
  _or?: Maybe<Array<Maybe<IMatchTeamsTeamBoolExp>>>;
  match?: Maybe<IMatchBoolExp>;
  matchId?: Maybe<IIntComparisonExp>;
  team?: Maybe<ITeamBoolExp>;
  teamId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IMatchTeamsTeamMaxFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "match_teams_team" */
export type IMatchTeamsTeamMaxOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IMatchTeamsTeamMinFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "match_teams_team" */
export type IMatchTeamsTeamMinOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "match_teams_team" */
export type IMatchTeamsTeamOrderBy = {
  match?: Maybe<IMatchOrderBy>;
  matchId?: Maybe<IOrderBy>;
  team?: Maybe<ITeamOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** select columns of table "match_teams_team" */
export const enum IMatchTeamsTeamSelectColumn {
  /** column name */
  MatchId = 'matchId',
  /** column name */
  TeamId = 'teamId'
};

/** aggregate stddev on columns */
export type IMatchTeamsTeamStddevFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "match_teams_team" */
export type IMatchTeamsTeamStddevOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IMatchTeamsTeamStddevPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "match_teams_team" */
export type IMatchTeamsTeamStddevPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IMatchTeamsTeamStddevSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "match_teams_team" */
export type IMatchTeamsTeamStddevSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IMatchTeamsTeamSumFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "match_teams_team" */
export type IMatchTeamsTeamSumOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IMatchTeamsTeamVarPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "match_teams_team" */
export type IMatchTeamsTeamVarPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IMatchTeamsTeamVarSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "match_teams_team" */
export type IMatchTeamsTeamVarSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IMatchTeamsTeamVarianceFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "match_teams_team" */
export type IMatchTeamsTeamVarianceOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IMatchVarPopFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "match" */
export type IMatchVarPopOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IMatchVarSampFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "match" */
export type IMatchVarSampOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IMatchVarianceFields = {
  durationTicks?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tickrate?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "match" */
export type IMatchVarianceOrderBy = {
  durationTicks?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  tickrate?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** columns and relationships of "notification" */
export type INotification = {
  /** An object relationship */
  ban?: Maybe<IBan>;
  banId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['date'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  seen: Scalars['Boolean'];
  /** An object relationship */
  user?: Maybe<IUser>;
  userId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "notification" */
export type INotificationAggregate = {
  aggregate?: Maybe<INotificationAggregateFields>;
  nodes: Array<INotification>;
};

/** aggregate fields of "notification" */
export type INotificationAggregateFields = {
  avg?: Maybe<INotificationAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<INotificationMaxFields>;
  min?: Maybe<INotificationMinFields>;
  stddev?: Maybe<INotificationStddevFields>;
  stddev_pop?: Maybe<INotificationStddevPopFields>;
  stddev_samp?: Maybe<INotificationStddevSampFields>;
  sum?: Maybe<INotificationSumFields>;
  var_pop?: Maybe<INotificationVarPopFields>;
  var_samp?: Maybe<INotificationVarSampFields>;
  variance?: Maybe<INotificationVarianceFields>;
};


/** aggregate fields of "notification" */
export type INotificationAggregateFieldsCountArgs = {
  columns?: Maybe<Array<INotificationSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification" */
export type INotificationAggregateOrderBy = {
  avg?: Maybe<INotificationAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<INotificationMaxOrderBy>;
  min?: Maybe<INotificationMinOrderBy>;
  stddev?: Maybe<INotificationStddevOrderBy>;
  stddev_pop?: Maybe<INotificationStddevPopOrderBy>;
  stddev_samp?: Maybe<INotificationStddevSampOrderBy>;
  sum?: Maybe<INotificationSumOrderBy>;
  var_pop?: Maybe<INotificationVarPopOrderBy>;
  var_samp?: Maybe<INotificationVarSampOrderBy>;
  variance?: Maybe<INotificationVarianceOrderBy>;
};

/** aggregate avg on columns */
export type INotificationAvgFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification" */
export type INotificationAvgOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** columns and relationships of "notification_bans_ban" */
export type INotificationBansBan = {
  /** An object relationship */
  ban: IBan;
  banId: Scalars['Int'];
  /** An object relationship */
  notification: INotification;
  notificationId: Scalars['Int'];
};

/** aggregated selection of "notification_bans_ban" */
export type INotificationBansBanAggregate = {
  aggregate?: Maybe<INotificationBansBanAggregateFields>;
  nodes: Array<INotificationBansBan>;
};

/** aggregate fields of "notification_bans_ban" */
export type INotificationBansBanAggregateFields = {
  avg?: Maybe<INotificationBansBanAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<INotificationBansBanMaxFields>;
  min?: Maybe<INotificationBansBanMinFields>;
  stddev?: Maybe<INotificationBansBanStddevFields>;
  stddev_pop?: Maybe<INotificationBansBanStddevPopFields>;
  stddev_samp?: Maybe<INotificationBansBanStddevSampFields>;
  sum?: Maybe<INotificationBansBanSumFields>;
  var_pop?: Maybe<INotificationBansBanVarPopFields>;
  var_samp?: Maybe<INotificationBansBanVarSampFields>;
  variance?: Maybe<INotificationBansBanVarianceFields>;
};


/** aggregate fields of "notification_bans_ban" */
export type INotificationBansBanAggregateFieldsCountArgs = {
  columns?: Maybe<Array<INotificationBansBanSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "notification_bans_ban" */
export type INotificationBansBanAggregateOrderBy = {
  avg?: Maybe<INotificationBansBanAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<INotificationBansBanMaxOrderBy>;
  min?: Maybe<INotificationBansBanMinOrderBy>;
  stddev?: Maybe<INotificationBansBanStddevOrderBy>;
  stddev_pop?: Maybe<INotificationBansBanStddevPopOrderBy>;
  stddev_samp?: Maybe<INotificationBansBanStddevSampOrderBy>;
  sum?: Maybe<INotificationBansBanSumOrderBy>;
  var_pop?: Maybe<INotificationBansBanVarPopOrderBy>;
  var_samp?: Maybe<INotificationBansBanVarSampOrderBy>;
  variance?: Maybe<INotificationBansBanVarianceOrderBy>;
};

/** aggregate avg on columns */
export type INotificationBansBanAvgFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "notification_bans_ban" */
export type INotificationBansBanAvgOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "notification_bans_ban". All fields are combined with a logical 'AND'. */
export type INotificationBansBanBoolExp = {
  _and?: Maybe<Array<Maybe<INotificationBansBanBoolExp>>>;
  _not?: Maybe<INotificationBansBanBoolExp>;
  _or?: Maybe<Array<Maybe<INotificationBansBanBoolExp>>>;
  ban?: Maybe<IBanBoolExp>;
  banId?: Maybe<IIntComparisonExp>;
  notification?: Maybe<INotificationBoolExp>;
  notificationId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type INotificationBansBanMaxFields = {
  banId?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "notification_bans_ban" */
export type INotificationBansBanMaxOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type INotificationBansBanMinFields = {
  banId?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "notification_bans_ban" */
export type INotificationBansBanMinOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "notification_bans_ban" */
export type INotificationBansBanOrderBy = {
  ban?: Maybe<IBanOrderBy>;
  banId?: Maybe<IOrderBy>;
  notification?: Maybe<INotificationOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** select columns of table "notification_bans_ban" */
export const enum INotificationBansBanSelectColumn {
  /** column name */
  BanId = 'banId',
  /** column name */
  NotificationId = 'notificationId'
};

/** aggregate stddev on columns */
export type INotificationBansBanStddevFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification_bans_ban" */
export type INotificationBansBanStddevOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type INotificationBansBanStddevPopFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification_bans_ban" */
export type INotificationBansBanStddevPopOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type INotificationBansBanStddevSampFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification_bans_ban" */
export type INotificationBansBanStddevSampOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type INotificationBansBanSumFields = {
  banId?: Maybe<Scalars['Int']>;
  notificationId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notification_bans_ban" */
export type INotificationBansBanSumOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type INotificationBansBanVarPopFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification_bans_ban" */
export type INotificationBansBanVarPopOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type INotificationBansBanVarSampFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification_bans_ban" */
export type INotificationBansBanVarSampOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type INotificationBansBanVarianceFields = {
  banId?: Maybe<Scalars['Float']>;
  notificationId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification_bans_ban" */
export type INotificationBansBanVarianceOrderBy = {
  banId?: Maybe<IOrderBy>;
  notificationId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "notification". All fields are combined with a logical 'AND'. */
export type INotificationBoolExp = {
  _and?: Maybe<Array<Maybe<INotificationBoolExp>>>;
  _not?: Maybe<INotificationBoolExp>;
  _or?: Maybe<Array<Maybe<INotificationBoolExp>>>;
  ban?: Maybe<IBanBoolExp>;
  banId?: Maybe<IIntComparisonExp>;
  createdAt?: Maybe<IDateComparisonExp>;
  deleted?: Maybe<IBooleanComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  seen?: Maybe<IBooleanComparisonExp>;
  user?: Maybe<IUserBoolExp>;
  userId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type INotificationMaxFields = {
  banId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "notification" */
export type INotificationMaxOrderBy = {
  banId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type INotificationMinFields = {
  banId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "notification" */
export type INotificationMinOrderBy = {
  banId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "notification" */
export type INotificationOrderBy = {
  ban?: Maybe<IBanOrderBy>;
  banId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  deleted?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  seen?: Maybe<IOrderBy>;
  user?: Maybe<IUserOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** select columns of table "notification" */
export const enum INotificationSelectColumn {
  /** column name */
  BanId = 'banId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Deleted = 'deleted',
  /** column name */
  Id = 'id',
  /** column name */
  Seen = 'seen',
  /** column name */
  UserId = 'userId'
};

/** aggregate stddev on columns */
export type INotificationStddevFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "notification" */
export type INotificationStddevOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type INotificationStddevPopFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "notification" */
export type INotificationStddevPopOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type INotificationStddevSampFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "notification" */
export type INotificationStddevSampOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type INotificationSumFields = {
  banId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "notification" */
export type INotificationSumOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type INotificationVarPopFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "notification" */
export type INotificationVarPopOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type INotificationVarSampFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "notification" */
export type INotificationVarSampOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type INotificationVarianceFields = {
  banId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "notification" */
export type INotificationVarianceOrderBy = {
  banId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** column ordering options */
export const enum IOrderBy {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
};

/** columns and relationships of "player" */
export type IPlayer = {
  /** An array relationship */
  bans: Array<IBan>;
  /** An aggregated array relationship */
  bans_aggregate: IBanAggregate;
  createdAt: Scalars['timestamp'];
  /** An array relationship */
  followedBy: Array<IPlayerFollowedByUser>;
  /** An aggregated array relationship */
  followedBy_aggregate: IPlayerFollowedByUserAggregate;
  id: Scalars['Int'];
  lastCheckedAt: Scalars['timestamp'];
  /** An array relationship */
  matches: Array<IMatchPlayersPlayer>;
  /** An aggregated array relationship */
  matches_aggregate: IMatchPlayersPlayerAggregate;
  /** An array relationship */
  player_infos: Array<IPlayerInfo>;
  /** An aggregated array relationship */
  player_infos_aggregate: IPlayerInfoAggregate;
  steamAvatar?: Maybe<Scalars['String']>;
  steamId: Scalars['String'];
  steamProfile?: Maybe<Scalars['String']>;
  steamUsername?: Maybe<Scalars['String']>;
  /** An array relationship */
  teams: Array<ITeamPlayersPlayer>;
  /** An aggregated array relationship */
  teams_aggregate: ITeamPlayersPlayerAggregate;
  /** An array relationship */
  trackedBy: Array<IPlayerTrackedByUser>;
  /** An aggregated array relationship */
  trackedBy_aggregate: IPlayerTrackedByUserAggregate;
};


/** columns and relationships of "player" */
export type IPlayerBansArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerBansAggregateArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerFollowedByArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerFollowedByAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerMatchesArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerMatchesAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerPlayerInfosArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerPlayerInfosAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerTeamsArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerTeamsAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerTrackedByArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** columns and relationships of "player" */
export type IPlayerTrackedByAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};

/** aggregated selection of "player" */
export type IPlayerAggregate = {
  aggregate?: Maybe<IPlayerAggregateFields>;
  nodes: Array<IPlayer>;
};

/** aggregate fields of "player" */
export type IPlayerAggregateFields = {
  avg?: Maybe<IPlayerAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerMaxFields>;
  min?: Maybe<IPlayerMinFields>;
  stddev?: Maybe<IPlayerStddevFields>;
  stddev_pop?: Maybe<IPlayerStddevPopFields>;
  stddev_samp?: Maybe<IPlayerStddevSampFields>;
  sum?: Maybe<IPlayerSumFields>;
  var_pop?: Maybe<IPlayerVarPopFields>;
  var_samp?: Maybe<IPlayerVarSampFields>;
  variance?: Maybe<IPlayerVarianceFields>;
};


/** aggregate fields of "player" */
export type IPlayerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player" */
export type IPlayerAggregateOrderBy = {
  avg?: Maybe<IPlayerAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerMaxOrderBy>;
  min?: Maybe<IPlayerMinOrderBy>;
  stddev?: Maybe<IPlayerStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerStddevSampOrderBy>;
  sum?: Maybe<IPlayerSumOrderBy>;
  var_pop?: Maybe<IPlayerVarPopOrderBy>;
  var_samp?: Maybe<IPlayerVarSampOrderBy>;
  variance?: Maybe<IPlayerVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerAvgFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player" */
export type IPlayerAvgOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** columns and relationships of "player_blind" */
export type IPlayerBlind = {
  /** An object relationship */
  attacker?: Maybe<IPlayerInfo>;
  attackerId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  duration: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  /** An object relationship */
  victim?: Maybe<IPlayerInfo>;
  victimId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "player_blind" */
export type IPlayerBlindAggregate = {
  aggregate?: Maybe<IPlayerBlindAggregateFields>;
  nodes: Array<IPlayerBlind>;
};

/** aggregate fields of "player_blind" */
export type IPlayerBlindAggregateFields = {
  avg?: Maybe<IPlayerBlindAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerBlindMaxFields>;
  min?: Maybe<IPlayerBlindMinFields>;
  stddev?: Maybe<IPlayerBlindStddevFields>;
  stddev_pop?: Maybe<IPlayerBlindStddevPopFields>;
  stddev_samp?: Maybe<IPlayerBlindStddevSampFields>;
  sum?: Maybe<IPlayerBlindSumFields>;
  var_pop?: Maybe<IPlayerBlindVarPopFields>;
  var_samp?: Maybe<IPlayerBlindVarSampFields>;
  variance?: Maybe<IPlayerBlindVarianceFields>;
};


/** aggregate fields of "player_blind" */
export type IPlayerBlindAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerBlindSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_blind" */
export type IPlayerBlindAggregateOrderBy = {
  avg?: Maybe<IPlayerBlindAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerBlindMaxOrderBy>;
  min?: Maybe<IPlayerBlindMinOrderBy>;
  stddev?: Maybe<IPlayerBlindStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerBlindStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerBlindStddevSampOrderBy>;
  sum?: Maybe<IPlayerBlindSumOrderBy>;
  var_pop?: Maybe<IPlayerBlindVarPopOrderBy>;
  var_samp?: Maybe<IPlayerBlindVarSampOrderBy>;
  variance?: Maybe<IPlayerBlindVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerBlindAvgFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_blind" */
export type IPlayerBlindAvgOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_blind". All fields are combined with a logical 'AND'. */
export type IPlayerBlindBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerBlindBoolExp>>>;
  _not?: Maybe<IPlayerBlindBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerBlindBoolExp>>>;
  attacker?: Maybe<IPlayerInfoBoolExp>;
  attackerId?: Maybe<IIntComparisonExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  duration?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  victim?: Maybe<IPlayerInfoBoolExp>;
  victimId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerBlindMaxFields = {
  attackerId?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_blind" */
export type IPlayerBlindMaxOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerBlindMinFields = {
  attackerId?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_blind" */
export type IPlayerBlindMinOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_blind" */
export type IPlayerBlindOrderBy = {
  attacker?: Maybe<IPlayerInfoOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victim?: Maybe<IPlayerInfoOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** select columns of table "player_blind" */
export const enum IPlayerBlindSelectColumn {
  /** column name */
  AttackerId = 'attackerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Duration = 'duration',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick',
  /** column name */
  VictimId = 'victimId'
};

/** aggregate stddev on columns */
export type IPlayerBlindStddevFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_blind" */
export type IPlayerBlindStddevOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerBlindStddevPopFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_blind" */
export type IPlayerBlindStddevPopOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerBlindStddevSampFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_blind" */
export type IPlayerBlindStddevSampOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerBlindSumFields = {
  attackerId?: Maybe<Scalars['Int']>;
  duration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_blind" */
export type IPlayerBlindSumOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerBlindVarPopFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_blind" */
export type IPlayerBlindVarPopOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerBlindVarSampFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_blind" */
export type IPlayerBlindVarSampOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerBlindVarianceFields = {
  attackerId?: Maybe<Scalars['Float']>;
  duration?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_blind" */
export type IPlayerBlindVarianceOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  duration?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player". All fields are combined with a logical 'AND'. */
export type IPlayerBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerBoolExp>>>;
  _not?: Maybe<IPlayerBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerBoolExp>>>;
  bans?: Maybe<IBanBoolExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  followedBy?: Maybe<IPlayerFollowedByUserBoolExp>;
  id?: Maybe<IIntComparisonExp>;
  lastCheckedAt?: Maybe<ITimestampComparisonExp>;
  matches?: Maybe<IMatchPlayersPlayerBoolExp>;
  player_infos?: Maybe<IPlayerInfoBoolExp>;
  steamAvatar?: Maybe<IStringComparisonExp>;
  steamId?: Maybe<IStringComparisonExp>;
  steamProfile?: Maybe<IStringComparisonExp>;
  steamUsername?: Maybe<IStringComparisonExp>;
  teams?: Maybe<ITeamPlayersPlayerBoolExp>;
  trackedBy?: Maybe<IPlayerTrackedByUserBoolExp>;
};

/** columns and relationships of "player_followed_by_user" */
export type IPlayerFollowedByUser = {
  /** An object relationship */
  player: IPlayer;
  playerId: Scalars['Int'];
  /** An object relationship */
  user: IUser;
  userId: Scalars['Int'];
};

/** aggregated selection of "player_followed_by_user" */
export type IPlayerFollowedByUserAggregate = {
  aggregate?: Maybe<IPlayerFollowedByUserAggregateFields>;
  nodes: Array<IPlayerFollowedByUser>;
};

/** aggregate fields of "player_followed_by_user" */
export type IPlayerFollowedByUserAggregateFields = {
  avg?: Maybe<IPlayerFollowedByUserAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerFollowedByUserMaxFields>;
  min?: Maybe<IPlayerFollowedByUserMinFields>;
  stddev?: Maybe<IPlayerFollowedByUserStddevFields>;
  stddev_pop?: Maybe<IPlayerFollowedByUserStddevPopFields>;
  stddev_samp?: Maybe<IPlayerFollowedByUserStddevSampFields>;
  sum?: Maybe<IPlayerFollowedByUserSumFields>;
  var_pop?: Maybe<IPlayerFollowedByUserVarPopFields>;
  var_samp?: Maybe<IPlayerFollowedByUserVarSampFields>;
  variance?: Maybe<IPlayerFollowedByUserVarianceFields>;
};


/** aggregate fields of "player_followed_by_user" */
export type IPlayerFollowedByUserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_followed_by_user" */
export type IPlayerFollowedByUserAggregateOrderBy = {
  avg?: Maybe<IPlayerFollowedByUserAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerFollowedByUserMaxOrderBy>;
  min?: Maybe<IPlayerFollowedByUserMinOrderBy>;
  stddev?: Maybe<IPlayerFollowedByUserStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerFollowedByUserStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerFollowedByUserStddevSampOrderBy>;
  sum?: Maybe<IPlayerFollowedByUserSumOrderBy>;
  var_pop?: Maybe<IPlayerFollowedByUserVarPopOrderBy>;
  var_samp?: Maybe<IPlayerFollowedByUserVarSampOrderBy>;
  variance?: Maybe<IPlayerFollowedByUserVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerFollowedByUserAvgFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserAvgOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_followed_by_user". All fields are combined with a logical 'AND'. */
export type IPlayerFollowedByUserBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerFollowedByUserBoolExp>>>;
  _not?: Maybe<IPlayerFollowedByUserBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerFollowedByUserBoolExp>>>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  user?: Maybe<IUserBoolExp>;
  userId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerFollowedByUserMaxFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserMaxOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerFollowedByUserMinFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserMinOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_followed_by_user" */
export type IPlayerFollowedByUserOrderBy = {
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
  user?: Maybe<IUserOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** select columns of table "player_followed_by_user" */
export const enum IPlayerFollowedByUserSelectColumn {
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  UserId = 'userId'
};

/** aggregate stddev on columns */
export type IPlayerFollowedByUserStddevFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserStddevOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerFollowedByUserStddevPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserStddevPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerFollowedByUserStddevSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserStddevSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerFollowedByUserSumFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserSumOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerFollowedByUserVarPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserVarPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerFollowedByUserVarSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserVarSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerFollowedByUserVarianceFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_followed_by_user" */
export type IPlayerFollowedByUserVarianceOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** columns and relationships of "player_hurt" */
export type IPlayerHurt = {
  /** An object relationship */
  attacker?: Maybe<IPlayerInfo>;
  attackerId?: Maybe<Scalars['Int']>;
  createdAt: Scalars['timestamp'];
  damageArmour: Scalars['Int'];
  damageHealth: Scalars['Int'];
  hitGroup: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  source: Scalars['Int'];
  tick: Scalars['Int'];
  /** An object relationship */
  victim?: Maybe<IPlayerInfo>;
  victimId?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "player_hurt" */
export type IPlayerHurtAggregate = {
  aggregate?: Maybe<IPlayerHurtAggregateFields>;
  nodes: Array<IPlayerHurt>;
};

/** aggregate fields of "player_hurt" */
export type IPlayerHurtAggregateFields = {
  avg?: Maybe<IPlayerHurtAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerHurtMaxFields>;
  min?: Maybe<IPlayerHurtMinFields>;
  stddev?: Maybe<IPlayerHurtStddevFields>;
  stddev_pop?: Maybe<IPlayerHurtStddevPopFields>;
  stddev_samp?: Maybe<IPlayerHurtStddevSampFields>;
  sum?: Maybe<IPlayerHurtSumFields>;
  var_pop?: Maybe<IPlayerHurtVarPopFields>;
  var_samp?: Maybe<IPlayerHurtVarSampFields>;
  variance?: Maybe<IPlayerHurtVarianceFields>;
};


/** aggregate fields of "player_hurt" */
export type IPlayerHurtAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerHurtSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_hurt" */
export type IPlayerHurtAggregateOrderBy = {
  avg?: Maybe<IPlayerHurtAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerHurtMaxOrderBy>;
  min?: Maybe<IPlayerHurtMinOrderBy>;
  stddev?: Maybe<IPlayerHurtStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerHurtStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerHurtStddevSampOrderBy>;
  sum?: Maybe<IPlayerHurtSumOrderBy>;
  var_pop?: Maybe<IPlayerHurtVarPopOrderBy>;
  var_samp?: Maybe<IPlayerHurtVarSampOrderBy>;
  variance?: Maybe<IPlayerHurtVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerHurtAvgFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_hurt" */
export type IPlayerHurtAvgOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_hurt". All fields are combined with a logical 'AND'. */
export type IPlayerHurtBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerHurtBoolExp>>>;
  _not?: Maybe<IPlayerHurtBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerHurtBoolExp>>>;
  attacker?: Maybe<IPlayerInfoBoolExp>;
  attackerId?: Maybe<IIntComparisonExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  damageArmour?: Maybe<IIntComparisonExp>;
  damageHealth?: Maybe<IIntComparisonExp>;
  hitGroup?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  source?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  victim?: Maybe<IPlayerInfoBoolExp>;
  victimId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerHurtMaxFields = {
  attackerId?: Maybe<Scalars['Int']>;
  damageArmour?: Maybe<Scalars['Int']>;
  damageHealth?: Maybe<Scalars['Int']>;
  hitGroup?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_hurt" */
export type IPlayerHurtMaxOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerHurtMinFields = {
  attackerId?: Maybe<Scalars['Int']>;
  damageArmour?: Maybe<Scalars['Int']>;
  damageHealth?: Maybe<Scalars['Int']>;
  hitGroup?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_hurt" */
export type IPlayerHurtMinOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_hurt" */
export type IPlayerHurtOrderBy = {
  attacker?: Maybe<IPlayerInfoOrderBy>;
  attackerId?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victim?: Maybe<IPlayerInfoOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** select columns of table "player_hurt" */
export const enum IPlayerHurtSelectColumn {
  /** column name */
  AttackerId = 'attackerId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DamageArmour = 'damageArmour',
  /** column name */
  DamageHealth = 'damageHealth',
  /** column name */
  HitGroup = 'hitGroup',
  /** column name */
  Id = 'id',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Source = 'source',
  /** column name */
  Tick = 'tick',
  /** column name */
  VictimId = 'victimId'
};

/** aggregate stddev on columns */
export type IPlayerHurtStddevFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_hurt" */
export type IPlayerHurtStddevOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerHurtStddevPopFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_hurt" */
export type IPlayerHurtStddevPopOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerHurtStddevSampFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_hurt" */
export type IPlayerHurtStddevSampOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerHurtSumFields = {
  attackerId?: Maybe<Scalars['Int']>;
  damageArmour?: Maybe<Scalars['Int']>;
  damageHealth?: Maybe<Scalars['Int']>;
  hitGroup?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  victimId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_hurt" */
export type IPlayerHurtSumOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerHurtVarPopFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_hurt" */
export type IPlayerHurtVarPopOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerHurtVarSampFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_hurt" */
export type IPlayerHurtVarSampOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerHurtVarianceFields = {
  attackerId?: Maybe<Scalars['Float']>;
  damageArmour?: Maybe<Scalars['Float']>;
  damageHealth?: Maybe<Scalars['Float']>;
  hitGroup?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  source?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  victimId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_hurt" */
export type IPlayerHurtVarianceOrderBy = {
  attackerId?: Maybe<IOrderBy>;
  damageArmour?: Maybe<IOrderBy>;
  damageHealth?: Maybe<IOrderBy>;
  hitGroup?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  source?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  victimId?: Maybe<IOrderBy>;
};

/** columns and relationships of "player_info" */
export type IPlayerInfo = {
  armour: Scalars['Int'];
  bulletsInMagazine: Scalars['Int'];
  cashSpentInRound: Scalars['Int'];
  createdAt: Scalars['timestamp'];
  equipmentValue: Scalars['Int'];
  freezeTimeEndEquipmentValue: Scalars['Int'];
  hasC4: Scalars['Boolean'];
  health: Scalars['Int'];
  id: Scalars['Int'];
  isScoped: Scalars['Boolean'];
  /** An object relationship */
  player?: Maybe<IPlayer>;
  playerId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  weapon: Scalars['player_info_weapon_enum'];
};

/** aggregated selection of "player_info" */
export type IPlayerInfoAggregate = {
  aggregate?: Maybe<IPlayerInfoAggregateFields>;
  nodes: Array<IPlayerInfo>;
};

/** aggregate fields of "player_info" */
export type IPlayerInfoAggregateFields = {
  avg?: Maybe<IPlayerInfoAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerInfoMaxFields>;
  min?: Maybe<IPlayerInfoMinFields>;
  stddev?: Maybe<IPlayerInfoStddevFields>;
  stddev_pop?: Maybe<IPlayerInfoStddevPopFields>;
  stddev_samp?: Maybe<IPlayerInfoStddevSampFields>;
  sum?: Maybe<IPlayerInfoSumFields>;
  var_pop?: Maybe<IPlayerInfoVarPopFields>;
  var_samp?: Maybe<IPlayerInfoVarSampFields>;
  variance?: Maybe<IPlayerInfoVarianceFields>;
};


/** aggregate fields of "player_info" */
export type IPlayerInfoAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerInfoSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_info" */
export type IPlayerInfoAggregateOrderBy = {
  avg?: Maybe<IPlayerInfoAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerInfoMaxOrderBy>;
  min?: Maybe<IPlayerInfoMinOrderBy>;
  stddev?: Maybe<IPlayerInfoStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerInfoStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerInfoStddevSampOrderBy>;
  sum?: Maybe<IPlayerInfoSumOrderBy>;
  var_pop?: Maybe<IPlayerInfoVarPopOrderBy>;
  var_samp?: Maybe<IPlayerInfoVarSampOrderBy>;
  variance?: Maybe<IPlayerInfoVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerInfoAvgFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_info" */
export type IPlayerInfoAvgOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_info". All fields are combined with a logical 'AND'. */
export type IPlayerInfoBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerInfoBoolExp>>>;
  _not?: Maybe<IPlayerInfoBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerInfoBoolExp>>>;
  armour?: Maybe<IIntComparisonExp>;
  bulletsInMagazine?: Maybe<IIntComparisonExp>;
  cashSpentInRound?: Maybe<IIntComparisonExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  equipmentValue?: Maybe<IIntComparisonExp>;
  freezeTimeEndEquipmentValue?: Maybe<IIntComparisonExp>;
  hasC4?: Maybe<IBooleanComparisonExp>;
  health?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  isScoped?: Maybe<IBooleanComparisonExp>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  weapon?: Maybe<IPlayerInfoWeaponEnumComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerInfoMaxFields = {
  armour?: Maybe<Scalars['Int']>;
  bulletsInMagazine?: Maybe<Scalars['Int']>;
  cashSpentInRound?: Maybe<Scalars['Int']>;
  equipmentValue?: Maybe<Scalars['Int']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_info" */
export type IPlayerInfoMaxOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerInfoMinFields = {
  armour?: Maybe<Scalars['Int']>;
  bulletsInMagazine?: Maybe<Scalars['Int']>;
  cashSpentInRound?: Maybe<Scalars['Int']>;
  equipmentValue?: Maybe<Scalars['Int']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_info" */
export type IPlayerInfoMinOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_info" */
export type IPlayerInfoOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  hasC4?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  isScoped?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  weapon?: Maybe<IOrderBy>;
};

/** select columns of table "player_info" */
export const enum IPlayerInfoSelectColumn {
  /** column name */
  Armour = 'armour',
  /** column name */
  BulletsInMagazine = 'bulletsInMagazine',
  /** column name */
  CashSpentInRound = 'cashSpentInRound',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EquipmentValue = 'equipmentValue',
  /** column name */
  FreezeTimeEndEquipmentValue = 'freezeTimeEndEquipmentValue',
  /** column name */
  HasC4 = 'hasC4',
  /** column name */
  Health = 'health',
  /** column name */
  Id = 'id',
  /** column name */
  IsScoped = 'isScoped',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  Tick = 'tick',
  /** column name */
  Weapon = 'weapon'
};

/** aggregate stddev on columns */
export type IPlayerInfoStddevFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_info" */
export type IPlayerInfoStddevOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerInfoStddevPopFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_info" */
export type IPlayerInfoStddevPopOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerInfoStddevSampFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_info" */
export type IPlayerInfoStddevSampOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerInfoSumFields = {
  armour?: Maybe<Scalars['Int']>;
  bulletsInMagazine?: Maybe<Scalars['Int']>;
  cashSpentInRound?: Maybe<Scalars['Int']>;
  equipmentValue?: Maybe<Scalars['Int']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Int']>;
  health?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_info" */
export type IPlayerInfoSumOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerInfoVarPopFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_info" */
export type IPlayerInfoVarPopOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerInfoVarSampFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_info" */
export type IPlayerInfoVarSampOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerInfoVarianceFields = {
  armour?: Maybe<Scalars['Float']>;
  bulletsInMagazine?: Maybe<Scalars['Float']>;
  cashSpentInRound?: Maybe<Scalars['Float']>;
  equipmentValue?: Maybe<Scalars['Float']>;
  freezeTimeEndEquipmentValue?: Maybe<Scalars['Float']>;
  health?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_info" */
export type IPlayerInfoVarianceOrderBy = {
  armour?: Maybe<IOrderBy>;
  bulletsInMagazine?: Maybe<IOrderBy>;
  cashSpentInRound?: Maybe<IOrderBy>;
  equipmentValue?: Maybe<IOrderBy>;
  freezeTimeEndEquipmentValue?: Maybe<IOrderBy>;
  health?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};


/** expression to compare columns of type player_info_weapon_enum. All fields are combined with logical 'AND'. */
export type IPlayerInfoWeaponEnumComparisonExp = {
  _eq?: Maybe<Scalars['player_info_weapon_enum']>;
  _gt?: Maybe<Scalars['player_info_weapon_enum']>;
  _gte?: Maybe<Scalars['player_info_weapon_enum']>;
  _in?: Maybe<Array<Scalars['player_info_weapon_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['player_info_weapon_enum']>;
  _lte?: Maybe<Scalars['player_info_weapon_enum']>;
  _neq?: Maybe<Scalars['player_info_weapon_enum']>;
  _nin?: Maybe<Array<Scalars['player_info_weapon_enum']>>;
};

/** columns and relationships of "player_jump" */
export type IPlayerJump = {
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  player?: Maybe<IPlayerInfo>;
  playerId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
};

/** aggregated selection of "player_jump" */
export type IPlayerJumpAggregate = {
  aggregate?: Maybe<IPlayerJumpAggregateFields>;
  nodes: Array<IPlayerJump>;
};

/** aggregate fields of "player_jump" */
export type IPlayerJumpAggregateFields = {
  avg?: Maybe<IPlayerJumpAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerJumpMaxFields>;
  min?: Maybe<IPlayerJumpMinFields>;
  stddev?: Maybe<IPlayerJumpStddevFields>;
  stddev_pop?: Maybe<IPlayerJumpStddevPopFields>;
  stddev_samp?: Maybe<IPlayerJumpStddevSampFields>;
  sum?: Maybe<IPlayerJumpSumFields>;
  var_pop?: Maybe<IPlayerJumpVarPopFields>;
  var_samp?: Maybe<IPlayerJumpVarSampFields>;
  variance?: Maybe<IPlayerJumpVarianceFields>;
};


/** aggregate fields of "player_jump" */
export type IPlayerJumpAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerJumpSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_jump" */
export type IPlayerJumpAggregateOrderBy = {
  avg?: Maybe<IPlayerJumpAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerJumpMaxOrderBy>;
  min?: Maybe<IPlayerJumpMinOrderBy>;
  stddev?: Maybe<IPlayerJumpStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerJumpStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerJumpStddevSampOrderBy>;
  sum?: Maybe<IPlayerJumpSumOrderBy>;
  var_pop?: Maybe<IPlayerJumpVarPopOrderBy>;
  var_samp?: Maybe<IPlayerJumpVarSampOrderBy>;
  variance?: Maybe<IPlayerJumpVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerJumpAvgFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_jump" */
export type IPlayerJumpAvgOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_jump". All fields are combined with a logical 'AND'. */
export type IPlayerJumpBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerJumpBoolExp>>>;
  _not?: Maybe<IPlayerJumpBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerJumpBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  player?: Maybe<IPlayerInfoBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerJumpMaxFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_jump" */
export type IPlayerJumpMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerJumpMinFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_jump" */
export type IPlayerJumpMinOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_jump" */
export type IPlayerJumpOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerInfoOrderBy>;
  playerId?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** select columns of table "player_jump" */
export const enum IPlayerJumpSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick'
};

/** aggregate stddev on columns */
export type IPlayerJumpStddevFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_jump" */
export type IPlayerJumpStddevOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerJumpStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_jump" */
export type IPlayerJumpStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerJumpStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_jump" */
export type IPlayerJumpStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerJumpSumFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_jump" */
export type IPlayerJumpSumOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerJumpVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_jump" */
export type IPlayerJumpVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerJumpVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_jump" */
export type IPlayerJumpVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerJumpVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_jump" */
export type IPlayerJumpVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate max on columns */
export type IPlayerMaxFields = {
  id?: Maybe<Scalars['Int']>;
  steamAvatar?: Maybe<Scalars['String']>;
  steamId?: Maybe<Scalars['String']>;
  steamProfile?: Maybe<Scalars['String']>;
  steamUsername?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "player" */
export type IPlayerMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  steamAvatar?: Maybe<IOrderBy>;
  steamId?: Maybe<IOrderBy>;
  steamProfile?: Maybe<IOrderBy>;
  steamUsername?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerMinFields = {
  id?: Maybe<Scalars['Int']>;
  steamAvatar?: Maybe<Scalars['String']>;
  steamId?: Maybe<Scalars['String']>;
  steamProfile?: Maybe<Scalars['String']>;
  steamUsername?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "player" */
export type IPlayerMinOrderBy = {
  id?: Maybe<IOrderBy>;
  steamAvatar?: Maybe<IOrderBy>;
  steamId?: Maybe<IOrderBy>;
  steamProfile?: Maybe<IOrderBy>;
  steamUsername?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player" */
export type IPlayerOrderBy = {
  bans_aggregate?: Maybe<IBanAggregateOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  followedBy_aggregate?: Maybe<IPlayerFollowedByUserAggregateOrderBy>;
  id?: Maybe<IOrderBy>;
  lastCheckedAt?: Maybe<IOrderBy>;
  matches_aggregate?: Maybe<IMatchPlayersPlayerAggregateOrderBy>;
  player_infos_aggregate?: Maybe<IPlayerInfoAggregateOrderBy>;
  steamAvatar?: Maybe<IOrderBy>;
  steamId?: Maybe<IOrderBy>;
  steamProfile?: Maybe<IOrderBy>;
  steamUsername?: Maybe<IOrderBy>;
  teams_aggregate?: Maybe<ITeamPlayersPlayerAggregateOrderBy>;
  trackedBy_aggregate?: Maybe<IPlayerTrackedByUserAggregateOrderBy>;
};

/** select columns of table "player" */
export const enum IPlayerSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  LastCheckedAt = 'lastCheckedAt',
  /** column name */
  SteamAvatar = 'steamAvatar',
  /** column name */
  SteamId = 'steamId',
  /** column name */
  SteamProfile = 'steamProfile',
  /** column name */
  SteamUsername = 'steamUsername'
};

/** aggregate stddev on columns */
export type IPlayerStddevFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player" */
export type IPlayerStddevOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player" */
export type IPlayerStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player" */
export type IPlayerStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerSumFields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player" */
export type IPlayerSumOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** columns and relationships of "player_tracked_by_user" */
export type IPlayerTrackedByUser = {
  /** An object relationship */
  player: IPlayer;
  playerId: Scalars['Int'];
  /** An object relationship */
  user: IUser;
  userId: Scalars['Int'];
};

/** aggregated selection of "player_tracked_by_user" */
export type IPlayerTrackedByUserAggregate = {
  aggregate?: Maybe<IPlayerTrackedByUserAggregateFields>;
  nodes: Array<IPlayerTrackedByUser>;
};

/** aggregate fields of "player_tracked_by_user" */
export type IPlayerTrackedByUserAggregateFields = {
  avg?: Maybe<IPlayerTrackedByUserAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPlayerTrackedByUserMaxFields>;
  min?: Maybe<IPlayerTrackedByUserMinFields>;
  stddev?: Maybe<IPlayerTrackedByUserStddevFields>;
  stddev_pop?: Maybe<IPlayerTrackedByUserStddevPopFields>;
  stddev_samp?: Maybe<IPlayerTrackedByUserStddevSampFields>;
  sum?: Maybe<IPlayerTrackedByUserSumFields>;
  var_pop?: Maybe<IPlayerTrackedByUserVarPopFields>;
  var_samp?: Maybe<IPlayerTrackedByUserVarSampFields>;
  variance?: Maybe<IPlayerTrackedByUserVarianceFields>;
};


/** aggregate fields of "player_tracked_by_user" */
export type IPlayerTrackedByUserAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "player_tracked_by_user" */
export type IPlayerTrackedByUserAggregateOrderBy = {
  avg?: Maybe<IPlayerTrackedByUserAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPlayerTrackedByUserMaxOrderBy>;
  min?: Maybe<IPlayerTrackedByUserMinOrderBy>;
  stddev?: Maybe<IPlayerTrackedByUserStddevOrderBy>;
  stddev_pop?: Maybe<IPlayerTrackedByUserStddevPopOrderBy>;
  stddev_samp?: Maybe<IPlayerTrackedByUserStddevSampOrderBy>;
  sum?: Maybe<IPlayerTrackedByUserSumOrderBy>;
  var_pop?: Maybe<IPlayerTrackedByUserVarPopOrderBy>;
  var_samp?: Maybe<IPlayerTrackedByUserVarSampOrderBy>;
  variance?: Maybe<IPlayerTrackedByUserVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPlayerTrackedByUserAvgFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserAvgOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "player_tracked_by_user". All fields are combined with a logical 'AND'. */
export type IPlayerTrackedByUserBoolExp = {
  _and?: Maybe<Array<Maybe<IPlayerTrackedByUserBoolExp>>>;
  _not?: Maybe<IPlayerTrackedByUserBoolExp>;
  _or?: Maybe<Array<Maybe<IPlayerTrackedByUserBoolExp>>>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  user?: Maybe<IUserBoolExp>;
  userId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPlayerTrackedByUserMaxFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserMaxOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPlayerTrackedByUserMinFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserMinOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "player_tracked_by_user" */
export type IPlayerTrackedByUserOrderBy = {
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
  user?: Maybe<IUserOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** select columns of table "player_tracked_by_user" */
export const enum IPlayerTrackedByUserSelectColumn {
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  UserId = 'userId'
};

/** aggregate stddev on columns */
export type IPlayerTrackedByUserStddevFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserStddevOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPlayerTrackedByUserStddevPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserStddevPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPlayerTrackedByUserStddevSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserStddevSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPlayerTrackedByUserSumFields = {
  playerId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserSumOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerTrackedByUserVarPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserVarPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerTrackedByUserVarSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserVarSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerTrackedByUserVarianceFields = {
  playerId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player_tracked_by_user" */
export type IPlayerTrackedByUserVarianceOrderBy = {
  playerId?: Maybe<IOrderBy>;
  userId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPlayerVarPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "player" */
export type IPlayerVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPlayerVarSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "player" */
export type IPlayerVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPlayerVarianceFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "player" */
export type IPlayerVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** columns and relationships of "position" */
export type IPosition = {
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  z: Scalars['Int'];
};

/** aggregated selection of "position" */
export type IPositionAggregate = {
  aggregate?: Maybe<IPositionAggregateFields>;
  nodes: Array<IPosition>;
};

/** aggregate fields of "position" */
export type IPositionAggregateFields = {
  avg?: Maybe<IPositionAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IPositionMaxFields>;
  min?: Maybe<IPositionMinFields>;
  stddev?: Maybe<IPositionStddevFields>;
  stddev_pop?: Maybe<IPositionStddevPopFields>;
  stddev_samp?: Maybe<IPositionStddevSampFields>;
  sum?: Maybe<IPositionSumFields>;
  var_pop?: Maybe<IPositionVarPopFields>;
  var_samp?: Maybe<IPositionVarSampFields>;
  variance?: Maybe<IPositionVarianceFields>;
};


/** aggregate fields of "position" */
export type IPositionAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IPositionSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "position" */
export type IPositionAggregateOrderBy = {
  avg?: Maybe<IPositionAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IPositionMaxOrderBy>;
  min?: Maybe<IPositionMinOrderBy>;
  stddev?: Maybe<IPositionStddevOrderBy>;
  stddev_pop?: Maybe<IPositionStddevPopOrderBy>;
  stddev_samp?: Maybe<IPositionStddevSampOrderBy>;
  sum?: Maybe<IPositionSumOrderBy>;
  var_pop?: Maybe<IPositionVarPopOrderBy>;
  var_samp?: Maybe<IPositionVarSampOrderBy>;
  variance?: Maybe<IPositionVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IPositionAvgFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "position" */
export type IPositionAvgOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "position". All fields are combined with a logical 'AND'. */
export type IPositionBoolExp = {
  _and?: Maybe<Array<Maybe<IPositionBoolExp>>>;
  _not?: Maybe<IPositionBoolExp>;
  _or?: Maybe<Array<Maybe<IPositionBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  x?: Maybe<IIntComparisonExp>;
  y?: Maybe<IIntComparisonExp>;
  z?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type IPositionMaxFields = {
  id?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  z?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "position" */
export type IPositionMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IPositionMinFields = {
  id?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  z?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "position" */
export type IPositionMinOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "position" */
export type IPositionOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** select columns of table "position" */
export const enum IPositionSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  X = 'x',
  /** column name */
  Y = 'y',
  /** column name */
  Z = 'z'
};

/** aggregate stddev on columns */
export type IPositionStddevFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "position" */
export type IPositionStddevOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IPositionStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "position" */
export type IPositionStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IPositionStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "position" */
export type IPositionStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IPositionSumFields = {
  id?: Maybe<Scalars['Int']>;
  x?: Maybe<Scalars['Int']>;
  y?: Maybe<Scalars['Int']>;
  z?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "position" */
export type IPositionSumOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IPositionVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "position" */
export type IPositionVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IPositionVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "position" */
export type IPositionVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IPositionVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  x?: Maybe<Scalars['Float']>;
  y?: Maybe<Scalars['Float']>;
  z?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "position" */
export type IPositionVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
  x?: Maybe<IOrderBy>;
  y?: Maybe<IOrderBy>;
  z?: Maybe<IOrderBy>;
};

/** query root */
export type IQueryRoot = {
  /** fetch data from the table: "ban" */
  ban: Array<IBan>;
  /** fetch aggregated fields from the table: "ban" */
  ban_aggregate: IBanAggregate;
  /** fetch data from the table: "ban" using primary key columns */
  ban_by_pk?: Maybe<IBan>;
  /** fetch data from the table: "bomb_status" */
  bomb_status: Array<IBombStatus>;
  /** fetch aggregated fields from the table: "bomb_status" */
  bomb_status_aggregate: IBombStatusAggregate;
  /** fetch data from the table: "bomb_status" using primary key columns */
  bomb_status_by_pk?: Maybe<IBombStatus>;
  /** fetch data from the table: "kill" */
  kill: Array<IKill>;
  /** fetch aggregated fields from the table: "kill" */
  kill_aggregate: IKillAggregate;
  /** fetch data from the table: "kill" using primary key columns */
  kill_by_pk?: Maybe<IKill>;
  /** fetch data from the table: "match" */
  match: Array<IMatch>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: IMatchAggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<IMatch>;
  /** fetch data from the table: "match_players_player" */
  match_players_player: Array<IMatchPlayersPlayer>;
  /** fetch aggregated fields from the table: "match_players_player" */
  match_players_player_aggregate: IMatchPlayersPlayerAggregate;
  /** fetch data from the table: "match_players_player" using primary key columns */
  match_players_player_by_pk?: Maybe<IMatchPlayersPlayer>;
  /** fetch data from the table: "match_teams_team" */
  match_teams_team: Array<IMatchTeamsTeam>;
  /** fetch aggregated fields from the table: "match_teams_team" */
  match_teams_team_aggregate: IMatchTeamsTeamAggregate;
  /** fetch data from the table: "match_teams_team" using primary key columns */
  match_teams_team_by_pk?: Maybe<IMatchTeamsTeam>;
  /** fetch data from the table: "notification" */
  notification: Array<INotification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: INotificationAggregate;
  /** fetch data from the table: "notification_bans_ban" */
  notification_bans_ban: Array<INotificationBansBan>;
  /** fetch aggregated fields from the table: "notification_bans_ban" */
  notification_bans_ban_aggregate: INotificationBansBanAggregate;
  /** fetch data from the table: "notification_bans_ban" using primary key columns */
  notification_bans_ban_by_pk?: Maybe<INotificationBansBan>;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<INotification>;
  /** fetch data from the table: "player" */
  player: Array<IPlayer>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: IPlayerAggregate;
  /** fetch data from the table: "player_blind" */
  player_blind: Array<IPlayerBlind>;
  /** fetch aggregated fields from the table: "player_blind" */
  player_blind_aggregate: IPlayerBlindAggregate;
  /** fetch data from the table: "player_blind" using primary key columns */
  player_blind_by_pk?: Maybe<IPlayerBlind>;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<IPlayer>;
  /** fetch data from the table: "player_followed_by_user" */
  player_followed_by_user: Array<IPlayerFollowedByUser>;
  /** fetch aggregated fields from the table: "player_followed_by_user" */
  player_followed_by_user_aggregate: IPlayerFollowedByUserAggregate;
  /** fetch data from the table: "player_followed_by_user" using primary key columns */
  player_followed_by_user_by_pk?: Maybe<IPlayerFollowedByUser>;
  /** fetch data from the table: "player_hurt" */
  player_hurt: Array<IPlayerHurt>;
  /** fetch aggregated fields from the table: "player_hurt" */
  player_hurt_aggregate: IPlayerHurtAggregate;
  /** fetch data from the table: "player_hurt" using primary key columns */
  player_hurt_by_pk?: Maybe<IPlayerHurt>;
  /** fetch data from the table: "player_info" */
  player_info: Array<IPlayerInfo>;
  /** fetch aggregated fields from the table: "player_info" */
  player_info_aggregate: IPlayerInfoAggregate;
  /** fetch data from the table: "player_info" using primary key columns */
  player_info_by_pk?: Maybe<IPlayerInfo>;
  /** fetch data from the table: "player_jump" */
  player_jump: Array<IPlayerJump>;
  /** fetch aggregated fields from the table: "player_jump" */
  player_jump_aggregate: IPlayerJumpAggregate;
  /** fetch data from the table: "player_jump" using primary key columns */
  player_jump_by_pk?: Maybe<IPlayerJump>;
  /** fetch data from the table: "player_tracked_by_user" */
  player_tracked_by_user: Array<IPlayerTrackedByUser>;
  /** fetch aggregated fields from the table: "player_tracked_by_user" */
  player_tracked_by_user_aggregate: IPlayerTrackedByUserAggregate;
  /** fetch data from the table: "player_tracked_by_user" using primary key columns */
  player_tracked_by_user_by_pk?: Maybe<IPlayerTrackedByUser>;
  /** fetch data from the table: "position" */
  position: Array<IPosition>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: IPositionAggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<IPosition>;
  /** fetch data from the table: "round" */
  round: Array<IRound>;
  /** fetch aggregated fields from the table: "round" */
  round_aggregate: IRoundAggregate;
  /** fetch data from the table: "round" using primary key columns */
  round_by_pk?: Maybe<IRound>;
  /** fetch data from the table: "team" */
  team: Array<ITeam>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: ITeamAggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<ITeam>;
  /** fetch data from the table: "team_matches_match" */
  team_matches_match: Array<ITeamMatchesMatch>;
  /** fetch aggregated fields from the table: "team_matches_match" */
  team_matches_match_aggregate: ITeamMatchesMatchAggregate;
  /** fetch data from the table: "team_matches_match" using primary key columns */
  team_matches_match_by_pk?: Maybe<ITeamMatchesMatch>;
  /** fetch data from the table: "team_players_player" */
  team_players_player: Array<ITeamPlayersPlayer>;
  /** fetch aggregated fields from the table: "team_players_player" */
  team_players_player_aggregate: ITeamPlayersPlayerAggregate;
  /** fetch data from the table: "team_players_player" using primary key columns */
  team_players_player_by_pk?: Maybe<ITeamPlayersPlayer>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<IUser>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<IUserSettings>;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<IUserSettings>;
  /** fetch data from the table: "utility_activated" */
  utility_activated: Array<IUtilityActivated>;
  /** fetch aggregated fields from the table: "utility_activated" */
  utility_activated_aggregate: IUtilityActivatedAggregate;
  /** fetch data from the table: "utility_activated" using primary key columns */
  utility_activated_by_pk?: Maybe<IUtilityActivated>;
  /** fetch data from the table: "utility_thrown" */
  utility_thrown: Array<IUtilityThrown>;
  /** fetch aggregated fields from the table: "utility_thrown" */
  utility_thrown_aggregate: IUtilityThrownAggregate;
  /** fetch data from the table: "utility_thrown" using primary key columns */
  utility_thrown_by_pk?: Maybe<IUtilityThrown>;
  /** fetch data from the table: "weapon_status" */
  weapon_status: Array<IWeaponStatus>;
  /** fetch aggregated fields from the table: "weapon_status" */
  weapon_status_aggregate: IWeaponStatusAggregate;
  /** fetch data from the table: "weapon_status" using primary key columns */
  weapon_status_by_pk?: Maybe<IWeaponStatus>;
};


/** query root */
export type IQueryRootBanArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** query root */
export type IQueryRootBanAggregateArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** query root */
export type IQueryRootBanByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootBombStatusArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** query root */
export type IQueryRootBombStatusAggregateArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** query root */
export type IQueryRootBombStatusByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootKillArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** query root */
export type IQueryRootKillAggregateArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** query root */
export type IQueryRootKillByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootMatchArgs = {
  distinct_on?: Maybe<Array<IMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchOrderBy>>;
  where?: Maybe<IMatchBoolExp>;
};


/** query root */
export type IQueryRootMatchAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchOrderBy>>;
  where?: Maybe<IMatchBoolExp>;
};


/** query root */
export type IQueryRootMatchByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootMatchPlayersPlayerArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** query root */
export type IQueryRootMatchPlayersPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** query root */
export type IQueryRootMatchPlayersPlayerByPkArgs = {
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
};


/** query root */
export type IQueryRootMatchTeamsTeamArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** query root */
export type IQueryRootMatchTeamsTeamAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** query root */
export type IQueryRootMatchTeamsTeamByPkArgs = {
  matchId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** query root */
export type IQueryRootNotificationArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** query root */
export type IQueryRootNotificationAggregateArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** query root */
export type IQueryRootNotificationBansBanArgs = {
  distinct_on?: Maybe<Array<INotificationBansBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationBansBanOrderBy>>;
  where?: Maybe<INotificationBansBanBoolExp>;
};


/** query root */
export type IQueryRootNotificationBansBanAggregateArgs = {
  distinct_on?: Maybe<Array<INotificationBansBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationBansBanOrderBy>>;
  where?: Maybe<INotificationBansBanBoolExp>;
};


/** query root */
export type IQueryRootNotificationBansBanByPkArgs = {
  banId: Scalars['Int'];
  notificationId: Scalars['Int'];
};


/** query root */
export type IQueryRootNotificationByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerArgs = {
  distinct_on?: Maybe<Array<IPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerOrderBy>>;
  where?: Maybe<IPlayerBoolExp>;
};


/** query root */
export type IQueryRootPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerOrderBy>>;
  where?: Maybe<IPlayerBoolExp>;
};


/** query root */
export type IQueryRootPlayerBlindArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** query root */
export type IQueryRootPlayerBlindAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** query root */
export type IQueryRootPlayerBlindByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerFollowedByUserArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** query root */
export type IQueryRootPlayerFollowedByUserAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** query root */
export type IQueryRootPlayerFollowedByUserByPkArgs = {
  playerId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerHurtArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** query root */
export type IQueryRootPlayerHurtAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** query root */
export type IQueryRootPlayerHurtByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerInfoArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** query root */
export type IQueryRootPlayerInfoAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** query root */
export type IQueryRootPlayerInfoByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerJumpArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** query root */
export type IQueryRootPlayerJumpAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** query root */
export type IQueryRootPlayerJumpByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootPlayerTrackedByUserArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** query root */
export type IQueryRootPlayerTrackedByUserAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** query root */
export type IQueryRootPlayerTrackedByUserByPkArgs = {
  playerId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** query root */
export type IQueryRootPositionArgs = {
  distinct_on?: Maybe<Array<IPositionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPositionOrderBy>>;
  where?: Maybe<IPositionBoolExp>;
};


/** query root */
export type IQueryRootPositionAggregateArgs = {
  distinct_on?: Maybe<Array<IPositionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPositionOrderBy>>;
  where?: Maybe<IPositionBoolExp>;
};


/** query root */
export type IQueryRootPositionByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootRoundArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** query root */
export type IQueryRootRoundAggregateArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** query root */
export type IQueryRootRoundByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootTeamArgs = {
  distinct_on?: Maybe<Array<ITeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamOrderBy>>;
  where?: Maybe<ITeamBoolExp>;
};


/** query root */
export type IQueryRootTeamAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamOrderBy>>;
  where?: Maybe<ITeamBoolExp>;
};


/** query root */
export type IQueryRootTeamByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootTeamMatchesMatchArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};


/** query root */
export type IQueryRootTeamMatchesMatchAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};


/** query root */
export type IQueryRootTeamMatchesMatchByPkArgs = {
  matchId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** query root */
export type IQueryRootTeamPlayersPlayerArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** query root */
export type IQueryRootTeamPlayersPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** query root */
export type IQueryRootTeamPlayersPlayerByPkArgs = {
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** query root */
export type IQueryRootUserArgs = {
  distinct_on?: Maybe<Array<IUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUserOrderBy>>;
  where?: Maybe<IUserBoolExp>;
};


/** query root */
export type IQueryRootUserByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootUserSettingsArgs = {
  distinct_on?: Maybe<Array<IUserSettingsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUserSettingsOrderBy>>;
  where?: Maybe<IUserSettingsBoolExp>;
};


/** query root */
export type IQueryRootUserSettingsByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootUtilityActivatedArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** query root */
export type IQueryRootUtilityActivatedAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** query root */
export type IQueryRootUtilityActivatedByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootUtilityThrownArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** query root */
export type IQueryRootUtilityThrownAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** query root */
export type IQueryRootUtilityThrownByPkArgs = {
  id: Scalars['Int'];
};


/** query root */
export type IQueryRootWeaponStatusArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};


/** query root */
export type IQueryRootWeaponStatusAggregateArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};


/** query root */
export type IQueryRootWeaponStatusByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "round" */
export type IRound = {
  /** An array relationship */
  bombStatusChanges: Array<IBombStatus>;
  /** An aggregated array relationship */
  bombStatusChanges_aggregate: IBombStatusAggregate;
  createdAt: Scalars['timestamp'];
  endReason: Scalars['round_endreason_enum'];
  endTick: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  kills: Array<IKill>;
  /** An aggregated array relationship */
  kills_aggregate: IKillAggregate;
  /** An object relationship */
  match?: Maybe<IMatch>;
  matchId?: Maybe<Scalars['Int']>;
  officialEndTick: Scalars['Int'];
  /** An array relationship */
  playerHurts: Array<IPlayerHurt>;
  /** An aggregated array relationship */
  playerHurts_aggregate: IPlayerHurtAggregate;
  /** An array relationship */
  playerJumps: Array<IPlayerJump>;
  /** An aggregated array relationship */
  playerJumps_aggregate: IPlayerJumpAggregate;
  /** An array relationship */
  playersBlinded: Array<IPlayerBlind>;
  /** An aggregated array relationship */
  playersBlinded_aggregate: IPlayerBlindAggregate;
  startTick: Scalars['Int'];
  /** An array relationship */
  utilityActivated: Array<IUtilityActivated>;
  /** An aggregated array relationship */
  utilityActivated_aggregate: IUtilityActivatedAggregate;
  /** An array relationship */
  utilityThrown: Array<IUtilityThrown>;
  /** An aggregated array relationship */
  utilityThrown_aggregate: IUtilityThrownAggregate;
  /** An array relationship */
  weaponStatusChanges: Array<IWeaponStatus>;
  /** An aggregated array relationship */
  weaponStatusChanges_aggregate: IWeaponStatusAggregate;
  /** An object relationship */
  winningTeam?: Maybe<ITeam>;
  winningTeamId?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "round" */
export type IRoundBombStatusChangesArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundBombStatusChangesAggregateArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundKillsArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundKillsAggregateArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayerHurtsArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayerHurtsAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayerJumpsArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayerJumpsAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayersBlindedArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundPlayersBlindedAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundUtilityActivatedArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundUtilityActivatedAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundUtilityThrownArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundUtilityThrownAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundWeaponStatusChangesArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};


/** columns and relationships of "round" */
export type IRoundWeaponStatusChangesAggregateArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};

/** aggregated selection of "round" */
export type IRoundAggregate = {
  aggregate?: Maybe<IRoundAggregateFields>;
  nodes: Array<IRound>;
};

/** aggregate fields of "round" */
export type IRoundAggregateFields = {
  avg?: Maybe<IRoundAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IRoundMaxFields>;
  min?: Maybe<IRoundMinFields>;
  stddev?: Maybe<IRoundStddevFields>;
  stddev_pop?: Maybe<IRoundStddevPopFields>;
  stddev_samp?: Maybe<IRoundStddevSampFields>;
  sum?: Maybe<IRoundSumFields>;
  var_pop?: Maybe<IRoundVarPopFields>;
  var_samp?: Maybe<IRoundVarSampFields>;
  variance?: Maybe<IRoundVarianceFields>;
};


/** aggregate fields of "round" */
export type IRoundAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IRoundSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "round" */
export type IRoundAggregateOrderBy = {
  avg?: Maybe<IRoundAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IRoundMaxOrderBy>;
  min?: Maybe<IRoundMinOrderBy>;
  stddev?: Maybe<IRoundStddevOrderBy>;
  stddev_pop?: Maybe<IRoundStddevPopOrderBy>;
  stddev_samp?: Maybe<IRoundStddevSampOrderBy>;
  sum?: Maybe<IRoundSumOrderBy>;
  var_pop?: Maybe<IRoundVarPopOrderBy>;
  var_samp?: Maybe<IRoundVarSampOrderBy>;
  variance?: Maybe<IRoundVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IRoundAvgFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "round" */
export type IRoundAvgOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "round". All fields are combined with a logical 'AND'. */
export type IRoundBoolExp = {
  _and?: Maybe<Array<Maybe<IRoundBoolExp>>>;
  _not?: Maybe<IRoundBoolExp>;
  _or?: Maybe<Array<Maybe<IRoundBoolExp>>>;
  bombStatusChanges?: Maybe<IBombStatusBoolExp>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  endReason?: Maybe<IRoundEndreasonEnumComparisonExp>;
  endTick?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  kills?: Maybe<IKillBoolExp>;
  match?: Maybe<IMatchBoolExp>;
  matchId?: Maybe<IIntComparisonExp>;
  officialEndTick?: Maybe<IIntComparisonExp>;
  playerHurts?: Maybe<IPlayerHurtBoolExp>;
  playerJumps?: Maybe<IPlayerJumpBoolExp>;
  playersBlinded?: Maybe<IPlayerBlindBoolExp>;
  startTick?: Maybe<IIntComparisonExp>;
  utilityActivated?: Maybe<IUtilityActivatedBoolExp>;
  utilityThrown?: Maybe<IUtilityThrownBoolExp>;
  weaponStatusChanges?: Maybe<IWeaponStatusBoolExp>;
  winningTeam?: Maybe<ITeamBoolExp>;
  winningTeamId?: Maybe<IIntComparisonExp>;
};


/** expression to compare columns of type round_endreason_enum. All fields are combined with logical 'AND'. */
export type IRoundEndreasonEnumComparisonExp = {
  _eq?: Maybe<Scalars['round_endreason_enum']>;
  _gt?: Maybe<Scalars['round_endreason_enum']>;
  _gte?: Maybe<Scalars['round_endreason_enum']>;
  _in?: Maybe<Array<Scalars['round_endreason_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['round_endreason_enum']>;
  _lte?: Maybe<Scalars['round_endreason_enum']>;
  _neq?: Maybe<Scalars['round_endreason_enum']>;
  _nin?: Maybe<Array<Scalars['round_endreason_enum']>>;
};

/** aggregate max on columns */
export type IRoundMaxFields = {
  endTick?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  matchId?: Maybe<Scalars['Int']>;
  officialEndTick?: Maybe<Scalars['Int']>;
  startTick?: Maybe<Scalars['Int']>;
  winningTeamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "round" */
export type IRoundMaxOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IRoundMinFields = {
  endTick?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  matchId?: Maybe<Scalars['Int']>;
  officialEndTick?: Maybe<Scalars['Int']>;
  startTick?: Maybe<Scalars['Int']>;
  winningTeamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "round" */
export type IRoundMinOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "round" */
export type IRoundOrderBy = {
  bombStatusChanges_aggregate?: Maybe<IBombStatusAggregateOrderBy>;
  createdAt?: Maybe<IOrderBy>;
  endReason?: Maybe<IOrderBy>;
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  kills_aggregate?: Maybe<IKillAggregateOrderBy>;
  match?: Maybe<IMatchOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  playerHurts_aggregate?: Maybe<IPlayerHurtAggregateOrderBy>;
  playerJumps_aggregate?: Maybe<IPlayerJumpAggregateOrderBy>;
  playersBlinded_aggregate?: Maybe<IPlayerBlindAggregateOrderBy>;
  startTick?: Maybe<IOrderBy>;
  utilityActivated_aggregate?: Maybe<IUtilityActivatedAggregateOrderBy>;
  utilityThrown_aggregate?: Maybe<IUtilityThrownAggregateOrderBy>;
  weaponStatusChanges_aggregate?: Maybe<IWeaponStatusAggregateOrderBy>;
  winningTeam?: Maybe<ITeamOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** select columns of table "round" */
export const enum IRoundSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EndReason = 'endReason',
  /** column name */
  EndTick = 'endTick',
  /** column name */
  Id = 'id',
  /** column name */
  MatchId = 'matchId',
  /** column name */
  OfficialEndTick = 'officialEndTick',
  /** column name */
  StartTick = 'startTick',
  /** column name */
  WinningTeamId = 'winningTeamId'
};

/** aggregate stddev on columns */
export type IRoundStddevFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "round" */
export type IRoundStddevOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IRoundStddevPopFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "round" */
export type IRoundStddevPopOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IRoundStddevSampFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "round" */
export type IRoundStddevSampOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IRoundSumFields = {
  endTick?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  matchId?: Maybe<Scalars['Int']>;
  officialEndTick?: Maybe<Scalars['Int']>;
  startTick?: Maybe<Scalars['Int']>;
  winningTeamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "round" */
export type IRoundSumOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IRoundVarPopFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "round" */
export type IRoundVarPopOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IRoundVarSampFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "round" */
export type IRoundVarSampOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IRoundVarianceFields = {
  endTick?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  matchId?: Maybe<Scalars['Float']>;
  officialEndTick?: Maybe<Scalars['Float']>;
  startTick?: Maybe<Scalars['Float']>;
  winningTeamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "round" */
export type IRoundVarianceOrderBy = {
  endTick?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matchId?: Maybe<IOrderBy>;
  officialEndTick?: Maybe<IOrderBy>;
  startTick?: Maybe<IOrderBy>;
  winningTeamId?: Maybe<IOrderBy>;
};

/** subscription root */
export type ISubscriptionRoot = {
  /** fetch data from the table: "ban" */
  ban: Array<IBan>;
  /** fetch aggregated fields from the table: "ban" */
  ban_aggregate: IBanAggregate;
  /** fetch data from the table: "ban" using primary key columns */
  ban_by_pk?: Maybe<IBan>;
  /** fetch data from the table: "bomb_status" */
  bomb_status: Array<IBombStatus>;
  /** fetch aggregated fields from the table: "bomb_status" */
  bomb_status_aggregate: IBombStatusAggregate;
  /** fetch data from the table: "bomb_status" using primary key columns */
  bomb_status_by_pk?: Maybe<IBombStatus>;
  /** fetch data from the table: "kill" */
  kill: Array<IKill>;
  /** fetch aggregated fields from the table: "kill" */
  kill_aggregate: IKillAggregate;
  /** fetch data from the table: "kill" using primary key columns */
  kill_by_pk?: Maybe<IKill>;
  /** fetch data from the table: "match" */
  match: Array<IMatch>;
  /** fetch aggregated fields from the table: "match" */
  match_aggregate: IMatchAggregate;
  /** fetch data from the table: "match" using primary key columns */
  match_by_pk?: Maybe<IMatch>;
  /** fetch data from the table: "match_players_player" */
  match_players_player: Array<IMatchPlayersPlayer>;
  /** fetch aggregated fields from the table: "match_players_player" */
  match_players_player_aggregate: IMatchPlayersPlayerAggregate;
  /** fetch data from the table: "match_players_player" using primary key columns */
  match_players_player_by_pk?: Maybe<IMatchPlayersPlayer>;
  /** fetch data from the table: "match_teams_team" */
  match_teams_team: Array<IMatchTeamsTeam>;
  /** fetch aggregated fields from the table: "match_teams_team" */
  match_teams_team_aggregate: IMatchTeamsTeamAggregate;
  /** fetch data from the table: "match_teams_team" using primary key columns */
  match_teams_team_by_pk?: Maybe<IMatchTeamsTeam>;
  /** fetch data from the table: "notification" */
  notification: Array<INotification>;
  /** fetch aggregated fields from the table: "notification" */
  notification_aggregate: INotificationAggregate;
  /** fetch data from the table: "notification_bans_ban" */
  notification_bans_ban: Array<INotificationBansBan>;
  /** fetch aggregated fields from the table: "notification_bans_ban" */
  notification_bans_ban_aggregate: INotificationBansBanAggregate;
  /** fetch data from the table: "notification_bans_ban" using primary key columns */
  notification_bans_ban_by_pk?: Maybe<INotificationBansBan>;
  /** fetch data from the table: "notification" using primary key columns */
  notification_by_pk?: Maybe<INotification>;
  /** fetch data from the table: "player" */
  player: Array<IPlayer>;
  /** fetch aggregated fields from the table: "player" */
  player_aggregate: IPlayerAggregate;
  /** fetch data from the table: "player_blind" */
  player_blind: Array<IPlayerBlind>;
  /** fetch aggregated fields from the table: "player_blind" */
  player_blind_aggregate: IPlayerBlindAggregate;
  /** fetch data from the table: "player_blind" using primary key columns */
  player_blind_by_pk?: Maybe<IPlayerBlind>;
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<IPlayer>;
  /** fetch data from the table: "player_followed_by_user" */
  player_followed_by_user: Array<IPlayerFollowedByUser>;
  /** fetch aggregated fields from the table: "player_followed_by_user" */
  player_followed_by_user_aggregate: IPlayerFollowedByUserAggregate;
  /** fetch data from the table: "player_followed_by_user" using primary key columns */
  player_followed_by_user_by_pk?: Maybe<IPlayerFollowedByUser>;
  /** fetch data from the table: "player_hurt" */
  player_hurt: Array<IPlayerHurt>;
  /** fetch aggregated fields from the table: "player_hurt" */
  player_hurt_aggregate: IPlayerHurtAggregate;
  /** fetch data from the table: "player_hurt" using primary key columns */
  player_hurt_by_pk?: Maybe<IPlayerHurt>;
  /** fetch data from the table: "player_info" */
  player_info: Array<IPlayerInfo>;
  /** fetch aggregated fields from the table: "player_info" */
  player_info_aggregate: IPlayerInfoAggregate;
  /** fetch data from the table: "player_info" using primary key columns */
  player_info_by_pk?: Maybe<IPlayerInfo>;
  /** fetch data from the table: "player_jump" */
  player_jump: Array<IPlayerJump>;
  /** fetch aggregated fields from the table: "player_jump" */
  player_jump_aggregate: IPlayerJumpAggregate;
  /** fetch data from the table: "player_jump" using primary key columns */
  player_jump_by_pk?: Maybe<IPlayerJump>;
  /** fetch data from the table: "player_tracked_by_user" */
  player_tracked_by_user: Array<IPlayerTrackedByUser>;
  /** fetch aggregated fields from the table: "player_tracked_by_user" */
  player_tracked_by_user_aggregate: IPlayerTrackedByUserAggregate;
  /** fetch data from the table: "player_tracked_by_user" using primary key columns */
  player_tracked_by_user_by_pk?: Maybe<IPlayerTrackedByUser>;
  /** fetch data from the table: "position" */
  position: Array<IPosition>;
  /** fetch aggregated fields from the table: "position" */
  position_aggregate: IPositionAggregate;
  /** fetch data from the table: "position" using primary key columns */
  position_by_pk?: Maybe<IPosition>;
  /** fetch data from the table: "round" */
  round: Array<IRound>;
  /** fetch aggregated fields from the table: "round" */
  round_aggregate: IRoundAggregate;
  /** fetch data from the table: "round" using primary key columns */
  round_by_pk?: Maybe<IRound>;
  /** fetch data from the table: "team" */
  team: Array<ITeam>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: ITeamAggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<ITeam>;
  /** fetch data from the table: "team_matches_match" */
  team_matches_match: Array<ITeamMatchesMatch>;
  /** fetch aggregated fields from the table: "team_matches_match" */
  team_matches_match_aggregate: ITeamMatchesMatchAggregate;
  /** fetch data from the table: "team_matches_match" using primary key columns */
  team_matches_match_by_pk?: Maybe<ITeamMatchesMatch>;
  /** fetch data from the table: "team_players_player" */
  team_players_player: Array<ITeamPlayersPlayer>;
  /** fetch aggregated fields from the table: "team_players_player" */
  team_players_player_aggregate: ITeamPlayersPlayerAggregate;
  /** fetch data from the table: "team_players_player" using primary key columns */
  team_players_player_by_pk?: Maybe<ITeamPlayersPlayer>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<IUser>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<IUserSettings>;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<IUserSettings>;
  /** fetch data from the table: "utility_activated" */
  utility_activated: Array<IUtilityActivated>;
  /** fetch aggregated fields from the table: "utility_activated" */
  utility_activated_aggregate: IUtilityActivatedAggregate;
  /** fetch data from the table: "utility_activated" using primary key columns */
  utility_activated_by_pk?: Maybe<IUtilityActivated>;
  /** fetch data from the table: "utility_thrown" */
  utility_thrown: Array<IUtilityThrown>;
  /** fetch aggregated fields from the table: "utility_thrown" */
  utility_thrown_aggregate: IUtilityThrownAggregate;
  /** fetch data from the table: "utility_thrown" using primary key columns */
  utility_thrown_by_pk?: Maybe<IUtilityThrown>;
  /** fetch data from the table: "weapon_status" */
  weapon_status: Array<IWeaponStatus>;
  /** fetch aggregated fields from the table: "weapon_status" */
  weapon_status_aggregate: IWeaponStatusAggregate;
  /** fetch data from the table: "weapon_status" using primary key columns */
  weapon_status_by_pk?: Maybe<IWeaponStatus>;
};


/** subscription root */
export type ISubscriptionRootBanArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** subscription root */
export type ISubscriptionRootBanAggregateArgs = {
  distinct_on?: Maybe<Array<IBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBanOrderBy>>;
  where?: Maybe<IBanBoolExp>;
};


/** subscription root */
export type ISubscriptionRootBanByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootBombStatusArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** subscription root */
export type ISubscriptionRootBombStatusAggregateArgs = {
  distinct_on?: Maybe<Array<IBombStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IBombStatusOrderBy>>;
  where?: Maybe<IBombStatusBoolExp>;
};


/** subscription root */
export type ISubscriptionRootBombStatusByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootKillArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** subscription root */
export type ISubscriptionRootKillAggregateArgs = {
  distinct_on?: Maybe<Array<IKillSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IKillOrderBy>>;
  where?: Maybe<IKillBoolExp>;
};


/** subscription root */
export type ISubscriptionRootKillByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootMatchArgs = {
  distinct_on?: Maybe<Array<IMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchOrderBy>>;
  where?: Maybe<IMatchBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchOrderBy>>;
  where?: Maybe<IMatchBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootMatchPlayersPlayerArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchPlayersPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchPlayersPlayerOrderBy>>;
  where?: Maybe<IMatchPlayersPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchPlayersPlayerByPkArgs = {
  matchId: Scalars['Int'];
  playerId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootMatchTeamsTeamArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchTeamsTeamAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** subscription root */
export type ISubscriptionRootMatchTeamsTeamByPkArgs = {
  matchId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootNotificationArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** subscription root */
export type ISubscriptionRootNotificationAggregateArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** subscription root */
export type ISubscriptionRootNotificationBansBanArgs = {
  distinct_on?: Maybe<Array<INotificationBansBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationBansBanOrderBy>>;
  where?: Maybe<INotificationBansBanBoolExp>;
};


/** subscription root */
export type ISubscriptionRootNotificationBansBanAggregateArgs = {
  distinct_on?: Maybe<Array<INotificationBansBanSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationBansBanOrderBy>>;
  where?: Maybe<INotificationBansBanBoolExp>;
};


/** subscription root */
export type ISubscriptionRootNotificationBansBanByPkArgs = {
  banId: Scalars['Int'];
  notificationId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootNotificationByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerArgs = {
  distinct_on?: Maybe<Array<IPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerOrderBy>>;
  where?: Maybe<IPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerOrderBy>>;
  where?: Maybe<IPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerBlindArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerBlindAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerBlindSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerBlindOrderBy>>;
  where?: Maybe<IPlayerBlindBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerBlindByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerFollowedByUserArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerFollowedByUserAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerFollowedByUserByPkArgs = {
  playerId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerHurtArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerHurtAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerHurtSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerHurtOrderBy>>;
  where?: Maybe<IPlayerHurtBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerHurtByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerInfoArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerInfoAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerInfoSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerInfoOrderBy>>;
  where?: Maybe<IPlayerInfoBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerInfoByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerJumpArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerJumpAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerJumpSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerJumpOrderBy>>;
  where?: Maybe<IPlayerJumpBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerJumpByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPlayerTrackedByUserArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerTrackedByUserAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPlayerTrackedByUserByPkArgs = {
  playerId: Scalars['Int'];
  userId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootPositionArgs = {
  distinct_on?: Maybe<Array<IPositionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPositionOrderBy>>;
  where?: Maybe<IPositionBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPositionAggregateArgs = {
  distinct_on?: Maybe<Array<IPositionSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPositionOrderBy>>;
  where?: Maybe<IPositionBoolExp>;
};


/** subscription root */
export type ISubscriptionRootPositionByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootRoundArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** subscription root */
export type ISubscriptionRootRoundAggregateArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** subscription root */
export type ISubscriptionRootRoundByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootTeamArgs = {
  distinct_on?: Maybe<Array<ITeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamOrderBy>>;
  where?: Maybe<ITeamBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamOrderBy>>;
  where?: Maybe<ITeamBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootTeamMatchesMatchArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamMatchesMatchAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamMatchesMatchOrderBy>>;
  where?: Maybe<ITeamMatchesMatchBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamMatchesMatchByPkArgs = {
  matchId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootTeamPlayersPlayerArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamPlayersPlayerAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** subscription root */
export type ISubscriptionRootTeamPlayersPlayerByPkArgs = {
  playerId: Scalars['Int'];
  teamId: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootUserArgs = {
  distinct_on?: Maybe<Array<IUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUserOrderBy>>;
  where?: Maybe<IUserBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUserByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootUserSettingsArgs = {
  distinct_on?: Maybe<Array<IUserSettingsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUserSettingsOrderBy>>;
  where?: Maybe<IUserSettingsBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUserSettingsByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootUtilityActivatedArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUtilityActivatedAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityActivatedOrderBy>>;
  where?: Maybe<IUtilityActivatedBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUtilityActivatedByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootUtilityThrownArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUtilityThrownAggregateArgs = {
  distinct_on?: Maybe<Array<IUtilityThrownSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IUtilityThrownOrderBy>>;
  where?: Maybe<IUtilityThrownBoolExp>;
};


/** subscription root */
export type ISubscriptionRootUtilityThrownByPkArgs = {
  id: Scalars['Int'];
};


/** subscription root */
export type ISubscriptionRootWeaponStatusArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};


/** subscription root */
export type ISubscriptionRootWeaponStatusAggregateArgs = {
  distinct_on?: Maybe<Array<IWeaponStatusSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IWeaponStatusOrderBy>>;
  where?: Maybe<IWeaponStatusBoolExp>;
};


/** subscription root */
export type ISubscriptionRootWeaponStatusByPkArgs = {
  id: Scalars['Int'];
};

/** columns and relationships of "team" */
export type ITeam = {
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An array relationship */
  matches: Array<IMatchTeamsTeam>;
  /** An aggregated array relationship */
  matches_aggregate: IMatchTeamsTeamAggregate;
  name?: Maybe<Scalars['String']>;
  /** An array relationship */
  players: Array<ITeamPlayersPlayer>;
  /** An aggregated array relationship */
  players_aggregate: ITeamPlayersPlayerAggregate;
  /** An array relationship */
  roundsWon: Array<IRound>;
  /** An aggregated array relationship */
  roundsWon_aggregate: IRoundAggregate;
  startingSide: Scalars['team_startingside_enum'];
};


/** columns and relationships of "team" */
export type ITeamMatchesArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** columns and relationships of "team" */
export type ITeamMatchesAggregateArgs = {
  distinct_on?: Maybe<Array<IMatchTeamsTeamSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IMatchTeamsTeamOrderBy>>;
  where?: Maybe<IMatchTeamsTeamBoolExp>;
};


/** columns and relationships of "team" */
export type ITeamPlayersArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** columns and relationships of "team" */
export type ITeamPlayersAggregateArgs = {
  distinct_on?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ITeamPlayersPlayerOrderBy>>;
  where?: Maybe<ITeamPlayersPlayerBoolExp>;
};


/** columns and relationships of "team" */
export type ITeamRoundsWonArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};


/** columns and relationships of "team" */
export type ITeamRoundsWonAggregateArgs = {
  distinct_on?: Maybe<Array<IRoundSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IRoundOrderBy>>;
  where?: Maybe<IRoundBoolExp>;
};

/** aggregated selection of "team" */
export type ITeamAggregate = {
  aggregate?: Maybe<ITeamAggregateFields>;
  nodes: Array<ITeam>;
};

/** aggregate fields of "team" */
export type ITeamAggregateFields = {
  avg?: Maybe<ITeamAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ITeamMaxFields>;
  min?: Maybe<ITeamMinFields>;
  stddev?: Maybe<ITeamStddevFields>;
  stddev_pop?: Maybe<ITeamStddevPopFields>;
  stddev_samp?: Maybe<ITeamStddevSampFields>;
  sum?: Maybe<ITeamSumFields>;
  var_pop?: Maybe<ITeamVarPopFields>;
  var_samp?: Maybe<ITeamVarSampFields>;
  variance?: Maybe<ITeamVarianceFields>;
};


/** aggregate fields of "team" */
export type ITeamAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ITeamSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team" */
export type ITeamAggregateOrderBy = {
  avg?: Maybe<ITeamAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<ITeamMaxOrderBy>;
  min?: Maybe<ITeamMinOrderBy>;
  stddev?: Maybe<ITeamStddevOrderBy>;
  stddev_pop?: Maybe<ITeamStddevPopOrderBy>;
  stddev_samp?: Maybe<ITeamStddevSampOrderBy>;
  sum?: Maybe<ITeamSumOrderBy>;
  var_pop?: Maybe<ITeamVarPopOrderBy>;
  var_samp?: Maybe<ITeamVarSampOrderBy>;
  variance?: Maybe<ITeamVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ITeamAvgFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team" */
export type ITeamAvgOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type ITeamBoolExp = {
  _and?: Maybe<Array<Maybe<ITeamBoolExp>>>;
  _not?: Maybe<ITeamBoolExp>;
  _or?: Maybe<Array<Maybe<ITeamBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  matches?: Maybe<IMatchTeamsTeamBoolExp>;
  name?: Maybe<IStringComparisonExp>;
  players?: Maybe<ITeamPlayersPlayerBoolExp>;
  roundsWon?: Maybe<IRoundBoolExp>;
  startingSide?: Maybe<ITeamStartingsideEnumComparisonExp>;
};

/** columns and relationships of "team_matches_match" */
export type ITeamMatchesMatch = {
  /** An object relationship */
  match: IMatch;
  matchId: Scalars['Int'];
  /** An object relationship */
  team: ITeam;
  teamId: Scalars['Int'];
};

/** aggregated selection of "team_matches_match" */
export type ITeamMatchesMatchAggregate = {
  aggregate?: Maybe<ITeamMatchesMatchAggregateFields>;
  nodes: Array<ITeamMatchesMatch>;
};

/** aggregate fields of "team_matches_match" */
export type ITeamMatchesMatchAggregateFields = {
  avg?: Maybe<ITeamMatchesMatchAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ITeamMatchesMatchMaxFields>;
  min?: Maybe<ITeamMatchesMatchMinFields>;
  stddev?: Maybe<ITeamMatchesMatchStddevFields>;
  stddev_pop?: Maybe<ITeamMatchesMatchStddevPopFields>;
  stddev_samp?: Maybe<ITeamMatchesMatchStddevSampFields>;
  sum?: Maybe<ITeamMatchesMatchSumFields>;
  var_pop?: Maybe<ITeamMatchesMatchVarPopFields>;
  var_samp?: Maybe<ITeamMatchesMatchVarSampFields>;
  variance?: Maybe<ITeamMatchesMatchVarianceFields>;
};


/** aggregate fields of "team_matches_match" */
export type ITeamMatchesMatchAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ITeamMatchesMatchSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_matches_match" */
export type ITeamMatchesMatchAggregateOrderBy = {
  avg?: Maybe<ITeamMatchesMatchAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<ITeamMatchesMatchMaxOrderBy>;
  min?: Maybe<ITeamMatchesMatchMinOrderBy>;
  stddev?: Maybe<ITeamMatchesMatchStddevOrderBy>;
  stddev_pop?: Maybe<ITeamMatchesMatchStddevPopOrderBy>;
  stddev_samp?: Maybe<ITeamMatchesMatchStddevSampOrderBy>;
  sum?: Maybe<ITeamMatchesMatchSumOrderBy>;
  var_pop?: Maybe<ITeamMatchesMatchVarPopOrderBy>;
  var_samp?: Maybe<ITeamMatchesMatchVarSampOrderBy>;
  variance?: Maybe<ITeamMatchesMatchVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ITeamMatchesMatchAvgFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_matches_match" */
export type ITeamMatchesMatchAvgOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "team_matches_match". All fields are combined with a logical 'AND'. */
export type ITeamMatchesMatchBoolExp = {
  _and?: Maybe<Array<Maybe<ITeamMatchesMatchBoolExp>>>;
  _not?: Maybe<ITeamMatchesMatchBoolExp>;
  _or?: Maybe<Array<Maybe<ITeamMatchesMatchBoolExp>>>;
  match?: Maybe<IMatchBoolExp>;
  matchId?: Maybe<IIntComparisonExp>;
  team?: Maybe<ITeamBoolExp>;
  teamId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type ITeamMatchesMatchMaxFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "team_matches_match" */
export type ITeamMatchesMatchMaxOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type ITeamMatchesMatchMinFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "team_matches_match" */
export type ITeamMatchesMatchMinOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "team_matches_match" */
export type ITeamMatchesMatchOrderBy = {
  match?: Maybe<IMatchOrderBy>;
  matchId?: Maybe<IOrderBy>;
  team?: Maybe<ITeamOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** select columns of table "team_matches_match" */
export const enum ITeamMatchesMatchSelectColumn {
  /** column name */
  MatchId = 'matchId',
  /** column name */
  TeamId = 'teamId'
};

/** aggregate stddev on columns */
export type ITeamMatchesMatchStddevFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_matches_match" */
export type ITeamMatchesMatchStddevOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type ITeamMatchesMatchStddevPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_matches_match" */
export type ITeamMatchesMatchStddevPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type ITeamMatchesMatchStddevSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_matches_match" */
export type ITeamMatchesMatchStddevSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type ITeamMatchesMatchSumFields = {
  matchId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_matches_match" */
export type ITeamMatchesMatchSumOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type ITeamMatchesMatchVarPopFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_matches_match" */
export type ITeamMatchesMatchVarPopOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type ITeamMatchesMatchVarSampFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_matches_match" */
export type ITeamMatchesMatchVarSampOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type ITeamMatchesMatchVarianceFields = {
  matchId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_matches_match" */
export type ITeamMatchesMatchVarianceOrderBy = {
  matchId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate max on columns */
export type ITeamMaxFields = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "team" */
export type ITeamMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  name?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type ITeamMinFields = {
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "team" */
export type ITeamMinOrderBy = {
  id?: Maybe<IOrderBy>;
  name?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "team" */
export type ITeamOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  matches_aggregate?: Maybe<IMatchTeamsTeamAggregateOrderBy>;
  name?: Maybe<IOrderBy>;
  players_aggregate?: Maybe<ITeamPlayersPlayerAggregateOrderBy>;
  roundsWon_aggregate?: Maybe<IRoundAggregateOrderBy>;
  startingSide?: Maybe<IOrderBy>;
};

/** columns and relationships of "team_players_player" */
export type ITeamPlayersPlayer = {
  /** An object relationship */
  player: IPlayer;
  playerId: Scalars['Int'];
  /** An object relationship */
  team: ITeam;
  teamId: Scalars['Int'];
};

/** aggregated selection of "team_players_player" */
export type ITeamPlayersPlayerAggregate = {
  aggregate?: Maybe<ITeamPlayersPlayerAggregateFields>;
  nodes: Array<ITeamPlayersPlayer>;
};

/** aggregate fields of "team_players_player" */
export type ITeamPlayersPlayerAggregateFields = {
  avg?: Maybe<ITeamPlayersPlayerAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<ITeamPlayersPlayerMaxFields>;
  min?: Maybe<ITeamPlayersPlayerMinFields>;
  stddev?: Maybe<ITeamPlayersPlayerStddevFields>;
  stddev_pop?: Maybe<ITeamPlayersPlayerStddevPopFields>;
  stddev_samp?: Maybe<ITeamPlayersPlayerStddevSampFields>;
  sum?: Maybe<ITeamPlayersPlayerSumFields>;
  var_pop?: Maybe<ITeamPlayersPlayerVarPopFields>;
  var_samp?: Maybe<ITeamPlayersPlayerVarSampFields>;
  variance?: Maybe<ITeamPlayersPlayerVarianceFields>;
};


/** aggregate fields of "team_players_player" */
export type ITeamPlayersPlayerAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ITeamPlayersPlayerSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "team_players_player" */
export type ITeamPlayersPlayerAggregateOrderBy = {
  avg?: Maybe<ITeamPlayersPlayerAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<ITeamPlayersPlayerMaxOrderBy>;
  min?: Maybe<ITeamPlayersPlayerMinOrderBy>;
  stddev?: Maybe<ITeamPlayersPlayerStddevOrderBy>;
  stddev_pop?: Maybe<ITeamPlayersPlayerStddevPopOrderBy>;
  stddev_samp?: Maybe<ITeamPlayersPlayerStddevSampOrderBy>;
  sum?: Maybe<ITeamPlayersPlayerSumOrderBy>;
  var_pop?: Maybe<ITeamPlayersPlayerVarPopOrderBy>;
  var_samp?: Maybe<ITeamPlayersPlayerVarSampOrderBy>;
  variance?: Maybe<ITeamPlayersPlayerVarianceOrderBy>;
};

/** aggregate avg on columns */
export type ITeamPlayersPlayerAvgFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "team_players_player" */
export type ITeamPlayersPlayerAvgOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "team_players_player". All fields are combined with a logical 'AND'. */
export type ITeamPlayersPlayerBoolExp = {
  _and?: Maybe<Array<Maybe<ITeamPlayersPlayerBoolExp>>>;
  _not?: Maybe<ITeamPlayersPlayerBoolExp>;
  _or?: Maybe<Array<Maybe<ITeamPlayersPlayerBoolExp>>>;
  player?: Maybe<IPlayerBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  team?: Maybe<ITeamBoolExp>;
  teamId?: Maybe<IIntComparisonExp>;
};

/** aggregate max on columns */
export type ITeamPlayersPlayerMaxFields = {
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "team_players_player" */
export type ITeamPlayersPlayerMaxOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type ITeamPlayersPlayerMinFields = {
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "team_players_player" */
export type ITeamPlayersPlayerMinOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "team_players_player" */
export type ITeamPlayersPlayerOrderBy = {
  player?: Maybe<IPlayerOrderBy>;
  playerId?: Maybe<IOrderBy>;
  team?: Maybe<ITeamOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** select columns of table "team_players_player" */
export const enum ITeamPlayersPlayerSelectColumn {
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  TeamId = 'teamId'
};

/** aggregate stddev on columns */
export type ITeamPlayersPlayerStddevFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team_players_player" */
export type ITeamPlayersPlayerStddevOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type ITeamPlayersPlayerStddevPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team_players_player" */
export type ITeamPlayersPlayerStddevPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type ITeamPlayersPlayerStddevSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team_players_player" */
export type ITeamPlayersPlayerStddevSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type ITeamPlayersPlayerSumFields = {
  playerId?: Maybe<Scalars['Int']>;
  teamId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team_players_player" */
export type ITeamPlayersPlayerSumOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type ITeamPlayersPlayerVarPopFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team_players_player" */
export type ITeamPlayersPlayerVarPopOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type ITeamPlayersPlayerVarSampFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team_players_player" */
export type ITeamPlayersPlayerVarSampOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type ITeamPlayersPlayerVarianceFields = {
  playerId?: Maybe<Scalars['Float']>;
  teamId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team_players_player" */
export type ITeamPlayersPlayerVarianceOrderBy = {
  playerId?: Maybe<IOrderBy>;
  teamId?: Maybe<IOrderBy>;
};

/** select columns of table "team" */
export const enum ITeamSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StartingSide = 'startingSide'
};


/** expression to compare columns of type team_startingside_enum. All fields are combined with logical 'AND'. */
export type ITeamStartingsideEnumComparisonExp = {
  _eq?: Maybe<Scalars['team_startingside_enum']>;
  _gt?: Maybe<Scalars['team_startingside_enum']>;
  _gte?: Maybe<Scalars['team_startingside_enum']>;
  _in?: Maybe<Array<Scalars['team_startingside_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['team_startingside_enum']>;
  _lte?: Maybe<Scalars['team_startingside_enum']>;
  _neq?: Maybe<Scalars['team_startingside_enum']>;
  _nin?: Maybe<Array<Scalars['team_startingside_enum']>>;
};

/** aggregate stddev on columns */
export type ITeamStddevFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "team" */
export type ITeamStddevOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type ITeamStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "team" */
export type ITeamStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type ITeamStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "team" */
export type ITeamStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type ITeamSumFields = {
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "team" */
export type ITeamSumOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type ITeamVarPopFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "team" */
export type ITeamVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type ITeamVarSampFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "team" */
export type ITeamVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type ITeamVarianceFields = {
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "team" */
export type ITeamVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
};


/** expression to compare columns of type timestamp. All fields are combined with logical 'AND'. */
export type ITimestampComparisonExp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};

/** columns and relationships of "user" */
export type IUser = {
  discordId?: Maybe<Scalars['String']>;
  faceitId?: Maybe<Scalars['String']>;
  faceitName?: Maybe<Scalars['String']>;
  /** An array relationship */
  follows: Array<IPlayerFollowedByUser>;
  /** An aggregated array relationship */
  follows_aggregate: IPlayerFollowedByUserAggregate;
  id: Scalars['Int'];
  lastCheckedAtFaceit: Scalars['timestamp'];
  lastCheckedAtSteam: Scalars['timestamp'];
  /** An array relationship */
  notifications: Array<INotification>;
  /** An aggregated array relationship */
  notifications_aggregate: INotificationAggregate;
  role: Scalars['String'];
  /** An object relationship */
  settings?: Maybe<IUserSettings>;
  settingsId?: Maybe<Scalars['Int']>;
  steamId: Scalars['String'];
  /** An array relationship */
  tracks: Array<IPlayerTrackedByUser>;
  /** An aggregated array relationship */
  tracks_aggregate: IPlayerTrackedByUserAggregate;
  username: Scalars['String'];
};


/** columns and relationships of "user" */
export type IUserFollowsArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** columns and relationships of "user" */
export type IUserFollowsAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerFollowedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerFollowedByUserOrderBy>>;
  where?: Maybe<IPlayerFollowedByUserBoolExp>;
};


/** columns and relationships of "user" */
export type IUserNotificationsArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** columns and relationships of "user" */
export type IUserNotificationsAggregateArgs = {
  distinct_on?: Maybe<Array<INotificationSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<INotificationOrderBy>>;
  where?: Maybe<INotificationBoolExp>;
};


/** columns and relationships of "user" */
export type IUserTracksArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};


/** columns and relationships of "user" */
export type IUserTracksAggregateArgs = {
  distinct_on?: Maybe<Array<IPlayerTrackedByUserSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<IPlayerTrackedByUserOrderBy>>;
  where?: Maybe<IPlayerTrackedByUserBoolExp>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type IUserBoolExp = {
  _and?: Maybe<Array<Maybe<IUserBoolExp>>>;
  _not?: Maybe<IUserBoolExp>;
  _or?: Maybe<Array<Maybe<IUserBoolExp>>>;
  discordId?: Maybe<IStringComparisonExp>;
  faceitId?: Maybe<IStringComparisonExp>;
  faceitName?: Maybe<IStringComparisonExp>;
  follows?: Maybe<IPlayerFollowedByUserBoolExp>;
  id?: Maybe<IIntComparisonExp>;
  lastCheckedAtFaceit?: Maybe<ITimestampComparisonExp>;
  lastCheckedAtSteam?: Maybe<ITimestampComparisonExp>;
  notifications?: Maybe<INotificationBoolExp>;
  role?: Maybe<IStringComparisonExp>;
  settings?: Maybe<IUserSettingsBoolExp>;
  settingsId?: Maybe<IIntComparisonExp>;
  steamId?: Maybe<IStringComparisonExp>;
  tracks?: Maybe<IPlayerTrackedByUserBoolExp>;
  username?: Maybe<IStringComparisonExp>;
};

/** ordering options when selecting data from "user" */
export type IUserOrderBy = {
  discordId?: Maybe<IOrderBy>;
  faceitId?: Maybe<IOrderBy>;
  faceitName?: Maybe<IOrderBy>;
  follows_aggregate?: Maybe<IPlayerFollowedByUserAggregateOrderBy>;
  id?: Maybe<IOrderBy>;
  lastCheckedAtFaceit?: Maybe<IOrderBy>;
  lastCheckedAtSteam?: Maybe<IOrderBy>;
  notifications_aggregate?: Maybe<INotificationAggregateOrderBy>;
  role?: Maybe<IOrderBy>;
  settings?: Maybe<IUserSettingsOrderBy>;
  settingsId?: Maybe<IOrderBy>;
  steamId?: Maybe<IOrderBy>;
  tracks_aggregate?: Maybe<IPlayerTrackedByUserAggregateOrderBy>;
  username?: Maybe<IOrderBy>;
};

/** select columns of table "user" */
export const enum IUserSelectColumn {
  /** column name */
  DiscordId = 'discordId',
  /** column name */
  FaceitId = 'faceitId',
  /** column name */
  FaceitName = 'faceitName',
  /** column name */
  Id = 'id',
  /** column name */
  LastCheckedAtFaceit = 'lastCheckedAtFaceit',
  /** column name */
  LastCheckedAtSteam = 'lastCheckedAtSteam',
  /** column name */
  Role = 'role',
  /** column name */
  SettingsId = 'settingsId',
  /** column name */
  SteamId = 'steamId',
  /** column name */
  Username = 'username'
};

/** columns and relationships of "user_settings" */
export type IUserSettings = {
  lastKnownMatch?: Maybe<Scalars['String']>;
  matchAuthCode?: Maybe<Scalars['String']>;
  matchmakingAuthFailed: Scalars['Boolean'];
  notificationCommunityEnabled: Scalars['Boolean'];
  notificationDiscordEnabled: Scalars['Boolean'];
  notificationEconomyEnabled: Scalars['Boolean'];
  notificationFaceitEnabled: Scalars['Boolean'];
  notificationGameEnabled: Scalars['Boolean'];
  notificationVACEnabled: Scalars['Boolean'];
  /** An object relationship */
  user?: Maybe<IUser>;
};

/** Boolean expression to filter rows from the table "user_settings". All fields are combined with a logical 'AND'. */
export type IUserSettingsBoolExp = {
  _and?: Maybe<Array<Maybe<IUserSettingsBoolExp>>>;
  _not?: Maybe<IUserSettingsBoolExp>;
  _or?: Maybe<Array<Maybe<IUserSettingsBoolExp>>>;
  lastKnownMatch?: Maybe<IStringComparisonExp>;
  matchAuthCode?: Maybe<IStringComparisonExp>;
  matchmakingAuthFailed?: Maybe<IBooleanComparisonExp>;
  notificationCommunityEnabled?: Maybe<IBooleanComparisonExp>;
  notificationDiscordEnabled?: Maybe<IBooleanComparisonExp>;
  notificationEconomyEnabled?: Maybe<IBooleanComparisonExp>;
  notificationFaceitEnabled?: Maybe<IBooleanComparisonExp>;
  notificationGameEnabled?: Maybe<IBooleanComparisonExp>;
  notificationVACEnabled?: Maybe<IBooleanComparisonExp>;
  user?: Maybe<IUserBoolExp>;
};

/** ordering options when selecting data from "user_settings" */
export type IUserSettingsOrderBy = {
  lastKnownMatch?: Maybe<IOrderBy>;
  matchAuthCode?: Maybe<IOrderBy>;
  matchmakingAuthFailed?: Maybe<IOrderBy>;
  notificationCommunityEnabled?: Maybe<IOrderBy>;
  notificationDiscordEnabled?: Maybe<IOrderBy>;
  notificationEconomyEnabled?: Maybe<IOrderBy>;
  notificationFaceitEnabled?: Maybe<IOrderBy>;
  notificationGameEnabled?: Maybe<IOrderBy>;
  notificationVACEnabled?: Maybe<IOrderBy>;
  user?: Maybe<IUserOrderBy>;
};

/** select columns of table "user_settings" */
export const enum IUserSettingsSelectColumn {
  /** column name */
  LastKnownMatch = 'lastKnownMatch',
  /** column name */
  MatchAuthCode = 'matchAuthCode',
  /** column name */
  MatchmakingAuthFailed = 'matchmakingAuthFailed',
  /** column name */
  NotificationCommunityEnabled = 'notificationCommunityEnabled',
  /** column name */
  NotificationDiscordEnabled = 'notificationDiscordEnabled',
  /** column name */
  NotificationEconomyEnabled = 'notificationEconomyEnabled',
  /** column name */
  NotificationFaceitEnabled = 'notificationFaceitEnabled',
  /** column name */
  NotificationGameEnabled = 'notificationGameEnabled',
  /** column name */
  NotificationVacEnabled = 'notificationVACEnabled'
};

/** columns and relationships of "utility_activated" */
export type IUtilityActivated = {
  createdAt: Scalars['timestamp'];
  entityId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  position?: Maybe<IPosition>;
  positionId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  type: Scalars['utility_activated_type_enum'];
};

/** aggregated selection of "utility_activated" */
export type IUtilityActivatedAggregate = {
  aggregate?: Maybe<IUtilityActivatedAggregateFields>;
  nodes: Array<IUtilityActivated>;
};

/** aggregate fields of "utility_activated" */
export type IUtilityActivatedAggregateFields = {
  avg?: Maybe<IUtilityActivatedAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IUtilityActivatedMaxFields>;
  min?: Maybe<IUtilityActivatedMinFields>;
  stddev?: Maybe<IUtilityActivatedStddevFields>;
  stddev_pop?: Maybe<IUtilityActivatedStddevPopFields>;
  stddev_samp?: Maybe<IUtilityActivatedStddevSampFields>;
  sum?: Maybe<IUtilityActivatedSumFields>;
  var_pop?: Maybe<IUtilityActivatedVarPopFields>;
  var_samp?: Maybe<IUtilityActivatedVarSampFields>;
  variance?: Maybe<IUtilityActivatedVarianceFields>;
};


/** aggregate fields of "utility_activated" */
export type IUtilityActivatedAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IUtilityActivatedSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "utility_activated" */
export type IUtilityActivatedAggregateOrderBy = {
  avg?: Maybe<IUtilityActivatedAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IUtilityActivatedMaxOrderBy>;
  min?: Maybe<IUtilityActivatedMinOrderBy>;
  stddev?: Maybe<IUtilityActivatedStddevOrderBy>;
  stddev_pop?: Maybe<IUtilityActivatedStddevPopOrderBy>;
  stddev_samp?: Maybe<IUtilityActivatedStddevSampOrderBy>;
  sum?: Maybe<IUtilityActivatedSumOrderBy>;
  var_pop?: Maybe<IUtilityActivatedVarPopOrderBy>;
  var_samp?: Maybe<IUtilityActivatedVarSampOrderBy>;
  variance?: Maybe<IUtilityActivatedVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IUtilityActivatedAvgFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "utility_activated" */
export type IUtilityActivatedAvgOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "utility_activated". All fields are combined with a logical 'AND'. */
export type IUtilityActivatedBoolExp = {
  _and?: Maybe<Array<Maybe<IUtilityActivatedBoolExp>>>;
  _not?: Maybe<IUtilityActivatedBoolExp>;
  _or?: Maybe<Array<Maybe<IUtilityActivatedBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  entityId?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  position?: Maybe<IPositionBoolExp>;
  positionId?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  type?: Maybe<IUtilityActivatedTypeEnumComparisonExp>;
};

/** aggregate max on columns */
export type IUtilityActivatedMaxFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "utility_activated" */
export type IUtilityActivatedMaxOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IUtilityActivatedMinFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "utility_activated" */
export type IUtilityActivatedMinOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "utility_activated" */
export type IUtilityActivatedOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  position?: Maybe<IPositionOrderBy>;
  positionId?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** select columns of table "utility_activated" */
export const enum IUtilityActivatedSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntityId = 'entityId',
  /** column name */
  Id = 'id',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick',
  /** column name */
  Type = 'type'
};

/** aggregate stddev on columns */
export type IUtilityActivatedStddevFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "utility_activated" */
export type IUtilityActivatedStddevOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IUtilityActivatedStddevPopFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "utility_activated" */
export type IUtilityActivatedStddevPopOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IUtilityActivatedStddevSampFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "utility_activated" */
export type IUtilityActivatedStddevSampOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IUtilityActivatedSumFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "utility_activated" */
export type IUtilityActivatedSumOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};


/** expression to compare columns of type utility_activated_type_enum. All fields are combined with logical 'AND'. */
export type IUtilityActivatedTypeEnumComparisonExp = {
  _eq?: Maybe<Scalars['utility_activated_type_enum']>;
  _gt?: Maybe<Scalars['utility_activated_type_enum']>;
  _gte?: Maybe<Scalars['utility_activated_type_enum']>;
  _in?: Maybe<Array<Scalars['utility_activated_type_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['utility_activated_type_enum']>;
  _lte?: Maybe<Scalars['utility_activated_type_enum']>;
  _neq?: Maybe<Scalars['utility_activated_type_enum']>;
  _nin?: Maybe<Array<Scalars['utility_activated_type_enum']>>;
};

/** aggregate var_pop on columns */
export type IUtilityActivatedVarPopFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "utility_activated" */
export type IUtilityActivatedVarPopOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IUtilityActivatedVarSampFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "utility_activated" */
export type IUtilityActivatedVarSampOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IUtilityActivatedVarianceFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "utility_activated" */
export type IUtilityActivatedVarianceOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** columns and relationships of "utility_thrown" */
export type IUtilityThrown = {
  createdAt: Scalars['timestamp'];
  entityId: Scalars['Int'];
  id: Scalars['Int'];
  /** An object relationship */
  player?: Maybe<IPlayerInfo>;
  playerId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  position?: Maybe<IPosition>;
  positionId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  type: Scalars['utility_thrown_type_enum'];
};

/** aggregated selection of "utility_thrown" */
export type IUtilityThrownAggregate = {
  aggregate?: Maybe<IUtilityThrownAggregateFields>;
  nodes: Array<IUtilityThrown>;
};

/** aggregate fields of "utility_thrown" */
export type IUtilityThrownAggregateFields = {
  avg?: Maybe<IUtilityThrownAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IUtilityThrownMaxFields>;
  min?: Maybe<IUtilityThrownMinFields>;
  stddev?: Maybe<IUtilityThrownStddevFields>;
  stddev_pop?: Maybe<IUtilityThrownStddevPopFields>;
  stddev_samp?: Maybe<IUtilityThrownStddevSampFields>;
  sum?: Maybe<IUtilityThrownSumFields>;
  var_pop?: Maybe<IUtilityThrownVarPopFields>;
  var_samp?: Maybe<IUtilityThrownVarSampFields>;
  variance?: Maybe<IUtilityThrownVarianceFields>;
};


/** aggregate fields of "utility_thrown" */
export type IUtilityThrownAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IUtilityThrownSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "utility_thrown" */
export type IUtilityThrownAggregateOrderBy = {
  avg?: Maybe<IUtilityThrownAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IUtilityThrownMaxOrderBy>;
  min?: Maybe<IUtilityThrownMinOrderBy>;
  stddev?: Maybe<IUtilityThrownStddevOrderBy>;
  stddev_pop?: Maybe<IUtilityThrownStddevPopOrderBy>;
  stddev_samp?: Maybe<IUtilityThrownStddevSampOrderBy>;
  sum?: Maybe<IUtilityThrownSumOrderBy>;
  var_pop?: Maybe<IUtilityThrownVarPopOrderBy>;
  var_samp?: Maybe<IUtilityThrownVarSampOrderBy>;
  variance?: Maybe<IUtilityThrownVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IUtilityThrownAvgFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "utility_thrown" */
export type IUtilityThrownAvgOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "utility_thrown". All fields are combined with a logical 'AND'. */
export type IUtilityThrownBoolExp = {
  _and?: Maybe<Array<Maybe<IUtilityThrownBoolExp>>>;
  _not?: Maybe<IUtilityThrownBoolExp>;
  _or?: Maybe<Array<Maybe<IUtilityThrownBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  entityId?: Maybe<IIntComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  player?: Maybe<IPlayerInfoBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  position?: Maybe<IPositionBoolExp>;
  positionId?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  type?: Maybe<IUtilityThrownTypeEnumComparisonExp>;
};

/** aggregate max on columns */
export type IUtilityThrownMaxFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "utility_thrown" */
export type IUtilityThrownMaxOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IUtilityThrownMinFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "utility_thrown" */
export type IUtilityThrownMinOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "utility_thrown" */
export type IUtilityThrownOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerInfoOrderBy>;
  playerId?: Maybe<IOrderBy>;
  position?: Maybe<IPositionOrderBy>;
  positionId?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** select columns of table "utility_thrown" */
export const enum IUtilityThrownSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  EntityId = 'entityId',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  PositionId = 'positionId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick',
  /** column name */
  Type = 'type'
};

/** aggregate stddev on columns */
export type IUtilityThrownStddevFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "utility_thrown" */
export type IUtilityThrownStddevOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IUtilityThrownStddevPopFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "utility_thrown" */
export type IUtilityThrownStddevPopOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IUtilityThrownStddevSampFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "utility_thrown" */
export type IUtilityThrownStddevSampOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IUtilityThrownSumFields = {
  entityId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  positionId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "utility_thrown" */
export type IUtilityThrownSumOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};


/** expression to compare columns of type utility_thrown_type_enum. All fields are combined with logical 'AND'. */
export type IUtilityThrownTypeEnumComparisonExp = {
  _eq?: Maybe<Scalars['utility_thrown_type_enum']>;
  _gt?: Maybe<Scalars['utility_thrown_type_enum']>;
  _gte?: Maybe<Scalars['utility_thrown_type_enum']>;
  _in?: Maybe<Array<Scalars['utility_thrown_type_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['utility_thrown_type_enum']>;
  _lte?: Maybe<Scalars['utility_thrown_type_enum']>;
  _neq?: Maybe<Scalars['utility_thrown_type_enum']>;
  _nin?: Maybe<Array<Scalars['utility_thrown_type_enum']>>;
};

/** aggregate var_pop on columns */
export type IUtilityThrownVarPopFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "utility_thrown" */
export type IUtilityThrownVarPopOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IUtilityThrownVarSampFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "utility_thrown" */
export type IUtilityThrownVarSampOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IUtilityThrownVarianceFields = {
  entityId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  positionId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "utility_thrown" */
export type IUtilityThrownVarianceOrderBy = {
  entityId?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  positionId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
};

/** columns and relationships of "weapon_status" */
export type IWeaponStatus = {
  createdAt: Scalars['timestamp'];
  id: Scalars['Int'];
  /** An object relationship */
  player?: Maybe<IPlayerInfo>;
  playerId?: Maybe<Scalars['Int']>;
  /** An object relationship */
  round?: Maybe<IRound>;
  roundId?: Maybe<Scalars['Int']>;
  tick: Scalars['Int'];
  type: Scalars['Int'];
  weapon: Scalars['weapon_status_weapon_enum'];
};

/** aggregated selection of "weapon_status" */
export type IWeaponStatusAggregate = {
  aggregate?: Maybe<IWeaponStatusAggregateFields>;
  nodes: Array<IWeaponStatus>;
};

/** aggregate fields of "weapon_status" */
export type IWeaponStatusAggregateFields = {
  avg?: Maybe<IWeaponStatusAvgFields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<IWeaponStatusMaxFields>;
  min?: Maybe<IWeaponStatusMinFields>;
  stddev?: Maybe<IWeaponStatusStddevFields>;
  stddev_pop?: Maybe<IWeaponStatusStddevPopFields>;
  stddev_samp?: Maybe<IWeaponStatusStddevSampFields>;
  sum?: Maybe<IWeaponStatusSumFields>;
  var_pop?: Maybe<IWeaponStatusVarPopFields>;
  var_samp?: Maybe<IWeaponStatusVarSampFields>;
  variance?: Maybe<IWeaponStatusVarianceFields>;
};


/** aggregate fields of "weapon_status" */
export type IWeaponStatusAggregateFieldsCountArgs = {
  columns?: Maybe<Array<IWeaponStatusSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "weapon_status" */
export type IWeaponStatusAggregateOrderBy = {
  avg?: Maybe<IWeaponStatusAvgOrderBy>;
  count?: Maybe<IOrderBy>;
  max?: Maybe<IWeaponStatusMaxOrderBy>;
  min?: Maybe<IWeaponStatusMinOrderBy>;
  stddev?: Maybe<IWeaponStatusStddevOrderBy>;
  stddev_pop?: Maybe<IWeaponStatusStddevPopOrderBy>;
  stddev_samp?: Maybe<IWeaponStatusStddevSampOrderBy>;
  sum?: Maybe<IWeaponStatusSumOrderBy>;
  var_pop?: Maybe<IWeaponStatusVarPopOrderBy>;
  var_samp?: Maybe<IWeaponStatusVarSampOrderBy>;
  variance?: Maybe<IWeaponStatusVarianceOrderBy>;
};

/** aggregate avg on columns */
export type IWeaponStatusAvgFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "weapon_status" */
export type IWeaponStatusAvgOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** Boolean expression to filter rows from the table "weapon_status". All fields are combined with a logical 'AND'. */
export type IWeaponStatusBoolExp = {
  _and?: Maybe<Array<Maybe<IWeaponStatusBoolExp>>>;
  _not?: Maybe<IWeaponStatusBoolExp>;
  _or?: Maybe<Array<Maybe<IWeaponStatusBoolExp>>>;
  createdAt?: Maybe<ITimestampComparisonExp>;
  id?: Maybe<IIntComparisonExp>;
  player?: Maybe<IPlayerInfoBoolExp>;
  playerId?: Maybe<IIntComparisonExp>;
  round?: Maybe<IRoundBoolExp>;
  roundId?: Maybe<IIntComparisonExp>;
  tick?: Maybe<IIntComparisonExp>;
  type?: Maybe<IIntComparisonExp>;
  weapon?: Maybe<IWeaponStatusWeaponEnumComparisonExp>;
};

/** aggregate max on columns */
export type IWeaponStatusMaxFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "weapon_status" */
export type IWeaponStatusMaxOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate min on columns */
export type IWeaponStatusMinFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "weapon_status" */
export type IWeaponStatusMinOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** ordering options when selecting data from "weapon_status" */
export type IWeaponStatusOrderBy = {
  createdAt?: Maybe<IOrderBy>;
  id?: Maybe<IOrderBy>;
  player?: Maybe<IPlayerInfoOrderBy>;
  playerId?: Maybe<IOrderBy>;
  round?: Maybe<IRoundOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
  weapon?: Maybe<IOrderBy>;
};

/** select columns of table "weapon_status" */
export const enum IWeaponStatusSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  PlayerId = 'playerId',
  /** column name */
  RoundId = 'roundId',
  /** column name */
  Tick = 'tick',
  /** column name */
  Type = 'type',
  /** column name */
  Weapon = 'weapon'
};

/** aggregate stddev on columns */
export type IWeaponStatusStddevFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "weapon_status" */
export type IWeaponStatusStddevOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate stddev_pop on columns */
export type IWeaponStatusStddevPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "weapon_status" */
export type IWeaponStatusStddevPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate stddev_samp on columns */
export type IWeaponStatusStddevSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "weapon_status" */
export type IWeaponStatusStddevSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate sum on columns */
export type IWeaponStatusSumFields = {
  id?: Maybe<Scalars['Int']>;
  playerId?: Maybe<Scalars['Int']>;
  roundId?: Maybe<Scalars['Int']>;
  tick?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "weapon_status" */
export type IWeaponStatusSumOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate var_pop on columns */
export type IWeaponStatusVarPopFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "weapon_status" */
export type IWeaponStatusVarPopOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate var_samp on columns */
export type IWeaponStatusVarSampFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "weapon_status" */
export type IWeaponStatusVarSampOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};

/** aggregate variance on columns */
export type IWeaponStatusVarianceFields = {
  id?: Maybe<Scalars['Float']>;
  playerId?: Maybe<Scalars['Float']>;
  roundId?: Maybe<Scalars['Float']>;
  tick?: Maybe<Scalars['Float']>;
  type?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "weapon_status" */
export type IWeaponStatusVarianceOrderBy = {
  id?: Maybe<IOrderBy>;
  playerId?: Maybe<IOrderBy>;
  roundId?: Maybe<IOrderBy>;
  tick?: Maybe<IOrderBy>;
  type?: Maybe<IOrderBy>;
};


/** expression to compare columns of type weapon_status_weapon_enum. All fields are combined with logical 'AND'. */
export type IWeaponStatusWeaponEnumComparisonExp = {
  _eq?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _gt?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _gte?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _in?: Maybe<Array<Scalars['weapon_status_weapon_enum']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _lte?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _neq?: Maybe<Scalars['weapon_status_weapon_enum']>;
  _nin?: Maybe<Array<Scalars['weapon_status_weapon_enum']>>;
};

