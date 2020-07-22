export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ban_type_enum: any;
  date: any;
  timestamp: any;
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
  steamAvatar?: Maybe<Scalars['String']>;
  steamId: Scalars['String'];
  steamProfile?: Maybe<Scalars['String']>;
  steamUsername?: Maybe<Scalars['String']>;
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
  steamAvatar?: Maybe<IStringComparisonExp>;
  steamId?: Maybe<IStringComparisonExp>;
  steamProfile?: Maybe<IStringComparisonExp>;
  steamUsername?: Maybe<IStringComparisonExp>;
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
  steamAvatar?: Maybe<IOrderBy>;
  steamId?: Maybe<IOrderBy>;
  steamProfile?: Maybe<IOrderBy>;
  steamUsername?: Maybe<IOrderBy>;
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

/** query root */
export type IQueryRoot = {
  /** fetch data from the table: "ban" */
  ban: Array<IBan>;
  /** fetch aggregated fields from the table: "ban" */
  ban_aggregate: IBanAggregate;
  /** fetch data from the table: "ban" using primary key columns */
  ban_by_pk?: Maybe<IBan>;
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
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<IPlayer>;
  /** fetch data from the table: "player_followed_by_user" */
  player_followed_by_user: Array<IPlayerFollowedByUser>;
  /** fetch aggregated fields from the table: "player_followed_by_user" */
  player_followed_by_user_aggregate: IPlayerFollowedByUserAggregate;
  /** fetch data from the table: "player_followed_by_user" using primary key columns */
  player_followed_by_user_by_pk?: Maybe<IPlayerFollowedByUser>;
  /** fetch data from the table: "player_tracked_by_user" */
  player_tracked_by_user: Array<IPlayerTrackedByUser>;
  /** fetch aggregated fields from the table: "player_tracked_by_user" */
  player_tracked_by_user_aggregate: IPlayerTrackedByUserAggregate;
  /** fetch data from the table: "player_tracked_by_user" using primary key columns */
  player_tracked_by_user_by_pk?: Maybe<IPlayerTrackedByUser>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<IUser>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<IUserSettings>;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<IUserSettings>;
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

/** subscription root */
export type ISubscriptionRoot = {
  /** fetch data from the table: "ban" */
  ban: Array<IBan>;
  /** fetch aggregated fields from the table: "ban" */
  ban_aggregate: IBanAggregate;
  /** fetch data from the table: "ban" using primary key columns */
  ban_by_pk?: Maybe<IBan>;
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
  /** fetch data from the table: "player" using primary key columns */
  player_by_pk?: Maybe<IPlayer>;
  /** fetch data from the table: "player_followed_by_user" */
  player_followed_by_user: Array<IPlayerFollowedByUser>;
  /** fetch aggregated fields from the table: "player_followed_by_user" */
  player_followed_by_user_aggregate: IPlayerFollowedByUserAggregate;
  /** fetch data from the table: "player_followed_by_user" using primary key columns */
  player_followed_by_user_by_pk?: Maybe<IPlayerFollowedByUser>;
  /** fetch data from the table: "player_tracked_by_user" */
  player_tracked_by_user: Array<IPlayerTrackedByUser>;
  /** fetch aggregated fields from the table: "player_tracked_by_user" */
  player_tracked_by_user_aggregate: IPlayerTrackedByUserAggregate;
  /** fetch data from the table: "player_tracked_by_user" using primary key columns */
  player_tracked_by_user_by_pk?: Maybe<IPlayerTrackedByUser>;
  /** fetch data from the table: "user" */
  user: Array<IUser>;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<IUser>;
  /** fetch data from the table: "user_settings" */
  user_settings: Array<IUserSettings>;
  /** fetch data from the table: "user_settings" using primary key columns */
  user_settings_by_pk?: Maybe<IUserSettings>;
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

