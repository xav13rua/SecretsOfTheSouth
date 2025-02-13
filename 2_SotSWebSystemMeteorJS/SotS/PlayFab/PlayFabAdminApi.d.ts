/// <reference path="Playfab.d.ts" />

declare module PlayFabAdminModule {
    export interface IPlayFabAdmin {
        ForgetAllCredentials(): void;

        /**
         * Abort an ongoing task instance.
         * https://api.playfab.com/Documentation/Admin/method/AbortTaskInstance
         */
        AbortTaskInstance(request: PlayFabAdminModels.AbortTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds a new news item to the title's news feed
         * https://api.playfab.com/Documentation/Admin/method/AddNews
         */
        AddNews(request: PlayFabAdminModels.AddNewsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddNewsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds a given tag to a player profile. The tag's namespace is automatically generated based on the source of the tag.
         * https://api.playfab.com/Documentation/Admin/method/AddPlayerTag
         */
        AddPlayerTag(request: PlayFabAdminModels.AddPlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddPlayerTagResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds the game server executable specified (previously uploaded - see GetServerBuildUploadUrl) to the set of those a
         * client is permitted to request in a call to StartGame
         * https://api.playfab.com/Documentation/Admin/method/AddServerBuild
         */
        AddServerBuild(request: PlayFabAdminModels.AddServerBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.AddServerBuildResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Increments the specified virtual currency by the stated amount
         * https://api.playfab.com/Documentation/Admin/method/AddUserVirtualCurrency
         */
        AddUserVirtualCurrency(request: PlayFabAdminModels.AddUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds one or more virtual currencies to the set defined for the title. Virtual Currencies have a maximum value of
         * 2,147,483,647 when granted to a player. Any value over that will be discarded.
         * https://api.playfab.com/Documentation/Admin/method/AddVirtualCurrencyTypes
         */
        AddVirtualCurrencyTypes(request: PlayFabAdminModels.AddVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Bans users by PlayFab ID with optional IP address, or MAC address for the provided game.
         * https://api.playfab.com/Documentation/Admin/method/BanUsers
         */
        BanUsers(request: PlayFabAdminModels.BanUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BanUsersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Checks the global count for the limited edition item.
         * https://api.playfab.com/Documentation/Admin/method/CheckLimitedEditionItemAvailability
         */
        CheckLimitedEditionItemAvailability(request: PlayFabAdminModels.CheckLimitedEditionItemAvailabilityRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CheckLimitedEditionItemAvailabilityResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create an ActionsOnPlayersInSegment task, which iterates through all players in a segment to execute action.
         * https://api.playfab.com/Documentation/Admin/method/CreateActionsOnPlayersInSegmentTask
         */
        CreateActionsOnPlayersInSegmentTask(request: PlayFabAdminModels.CreateActionsOnPlayerSegmentTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Create a CloudScript task, which can run a CloudScript on a schedule.
         * https://api.playfab.com/Documentation/Admin/method/CreateCloudScriptTask
         */
        CreateCloudScriptTask(request: PlayFabAdminModels.CreateCloudScriptTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreateTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new Player Shared Secret Key. It may take up to 5 minutes for this key to become generally available after
         * this API returns.
         * https://api.playfab.com/Documentation/Admin/method/CreatePlayerSharedSecret
         */
        CreatePlayerSharedSecret(request: PlayFabAdminModels.CreatePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds a new player statistic configuration to the title, optionally allowing the developer to specify a reset interval
         * and an aggregation method.
         * https://api.playfab.com/Documentation/Admin/method/CreatePlayerStatisticDefinition
         */
        CreatePlayerStatisticDefinition(request: PlayFabAdminModels.CreatePlayerStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.CreatePlayerStatisticDefinitionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a content file from the title. When deleting a file that does not exist, it returns success.
         * https://api.playfab.com/Documentation/Admin/method/DeleteContent
         */
        DeleteContent(request: PlayFabAdminModels.DeleteContentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes a user's player account from a title and deletes all associated data
         * https://api.playfab.com/Documentation/Admin/method/DeletePlayer
         */
        DeletePlayer(request: PlayFabAdminModels.DeletePlayerRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes an existing Player Shared Secret Key. It may take up to 5 minutes for this delete to be reflected after this API
         * returns.
         * https://api.playfab.com/Documentation/Admin/method/DeletePlayerSharedSecret
         */
        DeletePlayerSharedSecret(request: PlayFabAdminModels.DeletePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeletePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Deletes an existing virtual item store
         * https://api.playfab.com/Documentation/Admin/method/DeleteStore
         */
        DeleteStore(request: PlayFabAdminModels.DeleteStoreRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteStoreResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Delete a task.
         * https://api.playfab.com/Documentation/Admin/method/DeleteTask
         */
        DeleteTask(request: PlayFabAdminModels.DeleteTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Permanently deletes a title and all associated configuration
         * https://api.playfab.com/Documentation/Admin/method/DeleteTitle
         */
        DeleteTitle(request: PlayFabAdminModels.DeleteTitleRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.DeleteTitleResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get information about a ActionsOnPlayersInSegment task instance.
         * https://api.playfab.com/Documentation/Admin/method/GetActionsOnPlayersInSegmentTaskInstance
         */
        GetActionsOnPlayersInSegmentTaskInstance(request: PlayFabAdminModels.GetTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetActionsOnPlayersInSegmentTaskInstanceResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves an array of player segment definitions. Results from this can be used in subsequent API calls such as
         * GetPlayersInSegment which requires a Segment ID. While segment names can change the ID for that segment will not change.
         * https://api.playfab.com/Documentation/Admin/method/GetAllSegments
         */
        GetAllSegments(request: PlayFabAdminModels.GetAllSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetAllSegmentsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the specified version of the title's catalog of virtual goods, including all defined properties
         * https://api.playfab.com/Documentation/Admin/method/GetCatalogItems
         */
        GetCatalogItems(request: PlayFabAdminModels.GetCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the contents and information of a specific Cloud Script revision.
         * https://api.playfab.com/Documentation/Admin/method/GetCloudScriptRevision
         */
        GetCloudScriptRevision(request: PlayFabAdminModels.GetCloudScriptRevisionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptRevisionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get detail information about a CloudScript task instance.
         * https://api.playfab.com/Documentation/Admin/method/GetCloudScriptTaskInstance
         */
        GetCloudScriptTaskInstance(request: PlayFabAdminModels.GetTaskInstanceRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptTaskInstanceResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Lists all the current cloud script versions. For each version, information about the current published and latest
         * revisions is also listed.
         * https://api.playfab.com/Documentation/Admin/method/GetCloudScriptVersions
         */
        GetCloudScriptVersions(request: PlayFabAdminModels.GetCloudScriptVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetCloudScriptVersionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * List all contents of the title and get statistics such as size
         * https://api.playfab.com/Documentation/Admin/method/GetContentList
         */
        GetContentList(request: PlayFabAdminModels.GetContentListRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentListResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the pre-signed URL for uploading a content file. A subsequent HTTP PUT to the returned URL uploads the
         * content. Also, please be aware that the Content service is specifically PlayFab's CDN offering, for which standard CDN
         * rates apply.
         * https://api.playfab.com/Documentation/Admin/method/GetContentUploadUrl
         */
        GetContentUploadUrl(request: PlayFabAdminModels.GetContentUploadUrlRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetContentUploadUrlResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves a download URL for the requested report
         * https://api.playfab.com/Documentation/Admin/method/GetDataReport
         */
        GetDataReport(request: PlayFabAdminModels.GetDataReportRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetDataReportResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the details for a specific completed session, including links to standard out and standard error logs
         * https://api.playfab.com/Documentation/Admin/method/GetMatchmakerGameInfo
         */
        GetMatchmakerGameInfo(request: PlayFabAdminModels.GetMatchmakerGameInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetMatchmakerGameInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the details of defined game modes for the specified game server executable
         * https://api.playfab.com/Documentation/Admin/method/GetMatchmakerGameModes
         */
        GetMatchmakerGameModes(request: PlayFabAdminModels.GetMatchmakerGameModesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetMatchmakerGameModesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets a player's ID from an auth token.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerIdFromAuthToken
         */
        GetPlayerIdFromAuthToken(request: PlayFabAdminModels.GetPlayerIdFromAuthTokenRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerIdFromAuthTokenResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the player's profile
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerProfile
         */
        GetPlayerProfile(request: PlayFabAdminModels.GetPlayerProfileRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerProfileResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * List all segments that a player currently belongs to at this moment in time.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerSegments
         */
        GetPlayerSegments(request: PlayFabAdminModels.GetPlayersSegmentsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSegmentsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Returns all Player Shared Secret Keys including disabled and expired.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerSharedSecrets
         */
        GetPlayerSharedSecrets(request: PlayFabAdminModels.GetPlayerSharedSecretsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerSharedSecretsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Allows for paging through all players in a given segment. This API creates a snapshot of all player profiles that match
         * the segment definition at the time of its creation and lives through the Total Seconds to Live, refreshing its life span
         * on each subsequent use of the Continuation Token. Profiles that change during the course of paging will not be reflected
         * in the results. AB Test segments are currently not supported by this operation.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayersInSegment
         */
        GetPlayersInSegment(request: PlayFabAdminModels.GetPlayersInSegmentRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayersInSegmentResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the configuration information for all player statistics defined in the title, regardless of whether they have
         * a reset interval.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerStatisticDefinitions
         */
        GetPlayerStatisticDefinitions(request: PlayFabAdminModels.GetPlayerStatisticDefinitionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticDefinitionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the information on the available versions of the specified statistic.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerStatisticVersions
         */
        GetPlayerStatisticVersions(request: PlayFabAdminModels.GetPlayerStatisticVersionsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerStatisticVersionsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get all tags with a given Namespace (optional) from a player profile.
         * https://api.playfab.com/Documentation/Admin/method/GetPlayerTags
         */
        GetPlayerTags(request: PlayFabAdminModels.GetPlayerTagsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPlayerTagsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets the requested policy.
         * https://api.playfab.com/Documentation/Admin/method/GetPolicy
         */
        GetPolicy(request: PlayFabAdminModels.GetPolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the key-value store of custom publisher settings
         * https://api.playfab.com/Documentation/Admin/method/GetPublisherData
         */
        GetPublisherData(request: PlayFabAdminModels.GetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetPublisherDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the random drop table configuration for the title
         * https://api.playfab.com/Documentation/Admin/method/GetRandomResultTables
         */
        GetRandomResultTables(request: PlayFabAdminModels.GetRandomResultTablesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetRandomResultTablesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the build details for the specified game server executable
         * https://api.playfab.com/Documentation/Admin/method/GetServerBuildInfo
         */
        GetServerBuildInfo(request: PlayFabAdminModels.GetServerBuildInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetServerBuildInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the pre-authorized URL for uploading a game server package containing a build (does not enable the build for
         * use - see AddServerBuild)
         * https://api.playfab.com/Documentation/Admin/method/GetServerBuildUploadUrl
         */
        GetServerBuildUploadUrl(request: PlayFabAdminModels.GetServerBuildUploadURLRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetServerBuildUploadURLResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the set of items defined for the specified store, including all prices defined
         * https://api.playfab.com/Documentation/Admin/method/GetStoreItems
         */
        GetStoreItems(request: PlayFabAdminModels.GetStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Query for task instances by task, status, or time range.
         * https://api.playfab.com/Documentation/Admin/method/GetTaskInstances
         */
        GetTaskInstances(request: PlayFabAdminModels.GetTaskInstancesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTaskInstancesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Get definition information on a specified task or all tasks within a title.
         * https://api.playfab.com/Documentation/Admin/method/GetTasks
         */
        GetTasks(request: PlayFabAdminModels.GetTasksRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTasksResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the key-value store of custom title settings which can be read by the client
         * https://api.playfab.com/Documentation/Admin/method/GetTitleData
         */
        GetTitleData(request: PlayFabAdminModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the key-value store of custom title settings which cannot be read by the client
         * https://api.playfab.com/Documentation/Admin/method/GetTitleInternalData
         */
        GetTitleInternalData(request: PlayFabAdminModels.GetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the relevant details for a specified user, based upon a match against a supplied unique identifier
         * https://api.playfab.com/Documentation/Admin/method/GetUserAccountInfo
         */
        GetUserAccountInfo(request: PlayFabAdminModels.LookupUserAccountInfoRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.LookupUserAccountInfoResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Gets all bans for a user.
         * https://api.playfab.com/Documentation/Admin/method/GetUserBans
         */
        GetUserBans(request: PlayFabAdminModels.GetUserBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserData
         */
        GetUserData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the user which cannot be accessed by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserInternalData
         */
        GetUserInternalData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the specified user's current inventory of virtual goods
         * https://api.playfab.com/Documentation/Admin/method/GetUserInventory
         */
        GetUserInventory(request: PlayFabAdminModels.GetUserInventoryRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the publisher-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserPublisherData
         */
        GetUserPublisherData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the publisher-specific custom data for the user which cannot be accessed by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserPublisherInternalData
         */
        GetUserPublisherInternalData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the publisher-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserPublisherReadOnlyData
         */
        GetUserPublisherReadOnlyData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the title-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Admin/method/GetUserReadOnlyData
         */
        GetUserReadOnlyData(request: PlayFabAdminModels.GetUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GetUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Adds the specified items to the specified user inventories
         * https://api.playfab.com/Documentation/Admin/method/GrantItemsToUsers
         */
        GrantItemsToUsers(request: PlayFabAdminModels.GrantItemsToUsersRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.GrantItemsToUsersResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Increases the global count for the given scarce resource.
         * https://api.playfab.com/Documentation/Admin/method/IncrementLimitedEditionItemAvailability
         */
        IncrementLimitedEditionItemAvailability(request: PlayFabAdminModels.IncrementLimitedEditionItemAvailabilityRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementLimitedEditionItemAvailabilityResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Resets the indicated statistic, removing all player entries for it and backing up the old values.
         * https://api.playfab.com/Documentation/Admin/method/IncrementPlayerStatisticVersion
         */
        IncrementPlayerStatisticVersion(request: PlayFabAdminModels.IncrementPlayerStatisticVersionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.IncrementPlayerStatisticVersionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retrieves the build details for all game server executables which are currently defined for the title
         * https://api.playfab.com/Documentation/Admin/method/ListServerBuilds
         */
        ListServerBuilds(request: PlayFabAdminModels.ListBuildsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ListBuildsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Retuns the list of all defined virtual currencies for the title
         * https://api.playfab.com/Documentation/Admin/method/ListVirtualCurrencyTypes
         */
        ListVirtualCurrencyTypes(request: PlayFabAdminModels.ListVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ListVirtualCurrencyTypesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the game server mode details for the specified game server executable
         * https://api.playfab.com/Documentation/Admin/method/ModifyMatchmakerGameModes
         */
        ModifyMatchmakerGameModes(request: PlayFabAdminModels.ModifyMatchmakerGameModesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyMatchmakerGameModesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the build details for the specified game server executable
         * https://api.playfab.com/Documentation/Admin/method/ModifyServerBuild
         */
        ModifyServerBuild(request: PlayFabAdminModels.ModifyServerBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyServerBuildResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Attempts to process an order refund through the original real money payment provider.
         * https://api.playfab.com/Documentation/Admin/method/RefundPurchase
         */
        RefundPurchase(request: PlayFabAdminModels.RefundPurchaseRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RefundPurchaseResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Remove a given tag from a player profile. The tag's namespace is automatically generated based on the source of the tag.
         * https://api.playfab.com/Documentation/Admin/method/RemovePlayerTag
         */
        RemovePlayerTag(request: PlayFabAdminModels.RemovePlayerTagRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RemovePlayerTagResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes the game server executable specified from the set of those a client is permitted to request in a call to
         * StartGame
         * https://api.playfab.com/Documentation/Admin/method/RemoveServerBuild
         */
        RemoveServerBuild(request: PlayFabAdminModels.RemoveServerBuildRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RemoveServerBuildResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Removes one or more virtual currencies from the set defined for the title.
         * https://api.playfab.com/Documentation/Admin/method/RemoveVirtualCurrencyTypes
         */
        RemoveVirtualCurrencyTypes(request: PlayFabAdminModels.RemoveVirtualCurrencyTypesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.BlankResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Completely removes all statistics for the specified character, for the current game
         * https://api.playfab.com/Documentation/Admin/method/ResetCharacterStatistics
         */
        ResetCharacterStatistics(request: PlayFabAdminModels.ResetCharacterStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetCharacterStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Reset a player's password for a given title.
         * https://api.playfab.com/Documentation/Admin/method/ResetPassword
         */
        ResetPassword(request: PlayFabAdminModels.ResetPasswordRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetPasswordResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Completely removes all statistics for the specified user, for the current game
         * https://api.playfab.com/Documentation/Admin/method/ResetUserStatistics
         */
        ResetUserStatistics(request: PlayFabAdminModels.ResetUserStatisticsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResetUserStatisticsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Attempts to resolve a dispute with the original order's payment provider.
         * https://api.playfab.com/Documentation/Admin/method/ResolvePurchaseDispute
         */
        ResolvePurchaseDispute(request: PlayFabAdminModels.ResolvePurchaseDisputeRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ResolvePurchaseDisputeResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Revoke all active bans for a user.
         * https://api.playfab.com/Documentation/Admin/method/RevokeAllBansForUser
         */
        RevokeAllBansForUser(request: PlayFabAdminModels.RevokeAllBansForUserRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeAllBansForUserResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Revoke all active bans specified with BanId.
         * https://api.playfab.com/Documentation/Admin/method/RevokeBans
         */
        RevokeBans(request: PlayFabAdminModels.RevokeBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Revokes access to an item in a user's inventory
         * https://api.playfab.com/Documentation/Admin/method/RevokeInventoryItem
         */
        RevokeInventoryItem(request: PlayFabAdminModels.RevokeInventoryItemRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Revokes access for up to 25 items across multiple users and characters.
         * https://api.playfab.com/Documentation/Admin/method/RevokeInventoryItems
         */
        RevokeInventoryItems(request: PlayFabAdminModels.RevokeInventoryItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RevokeInventoryItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Run a task immediately regardless of its schedule.
         * https://api.playfab.com/Documentation/Admin/method/RunTask
         */
        RunTask(request: PlayFabAdminModels.RunTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.RunTaskResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Forces an email to be sent to the registered email address for the user's account, with a link allowing the user to
         * change the password.If an account recovery email template ID is provided, an email using the custom email template will
         * be used.
         * https://api.playfab.com/Documentation/Admin/method/SendAccountRecoveryEmail
         */
        SendAccountRecoveryEmail(request: PlayFabAdminModels.SendAccountRecoveryEmailRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SendAccountRecoveryEmailResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates the catalog configuration of all virtual goods for the specified catalog version
         * https://api.playfab.com/Documentation/Admin/method/SetCatalogItems
         */
        SetCatalogItems(request: PlayFabAdminModels.UpdateCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets or resets the player's secret. Player secrets are used to sign API requests.
         * https://api.playfab.com/Documentation/Admin/method/SetPlayerSecret
         */
        SetPlayerSecret(request: PlayFabAdminModels.SetPlayerSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPlayerSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the currently published revision of a title Cloud Script
         * https://api.playfab.com/Documentation/Admin/method/SetPublishedRevision
         */
        SetPublishedRevision(request: PlayFabAdminModels.SetPublishedRevisionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublishedRevisionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the key-value store of custom publisher settings
         * https://api.playfab.com/Documentation/Admin/method/SetPublisherData
         */
        SetPublisherData(request: PlayFabAdminModels.SetPublisherDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetPublisherDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets all the items in one virtual store
         * https://api.playfab.com/Documentation/Admin/method/SetStoreItems
         */
        SetStoreItems(request: PlayFabAdminModels.UpdateStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates and updates the key-value store of custom title settings which can be read by the client
         * https://api.playfab.com/Documentation/Admin/method/SetTitleData
         */
        SetTitleData(request: PlayFabAdminModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the key-value store of custom title settings which cannot be read by the client
         * https://api.playfab.com/Documentation/Admin/method/SetTitleInternalData
         */
        SetTitleInternalData(request: PlayFabAdminModels.SetTitleDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetTitleDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Sets the Amazon Resource Name (ARN) for iOS and Android push notifications. Documentation on the exact restrictions can
         * be found at: http://docs.aws.amazon.com/sns/latest/api/API_CreatePlatformApplication.html. Currently, Amazon device
         * Messaging is not supported.
         * https://api.playfab.com/Documentation/Admin/method/SetupPushNotification
         */
        SetupPushNotification(request: PlayFabAdminModels.SetupPushNotificationRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.SetupPushNotificationResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Decrements the specified virtual currency by the stated amount
         * https://api.playfab.com/Documentation/Admin/method/SubtractUserVirtualCurrency
         */
        SubtractUserVirtualCurrency(request: PlayFabAdminModels.SubtractUserVirtualCurrencyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.ModifyUserVirtualCurrencyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates information of a list of existing bans specified with Ban Ids.
         * https://api.playfab.com/Documentation/Admin/method/UpdateBans
         */
        UpdateBans(request: PlayFabAdminModels.UpdateBansRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateBansResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the catalog configuration for virtual goods in the specified catalog version
         * https://api.playfab.com/Documentation/Admin/method/UpdateCatalogItems
         */
        UpdateCatalogItems(request: PlayFabAdminModels.UpdateCatalogItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCatalogItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Creates a new Cloud Script revision and uploads source code to it. Note that at this time, only one file should be
         * submitted in the revision.
         * https://api.playfab.com/Documentation/Admin/method/UpdateCloudScript
         */
        UpdateCloudScript(request: PlayFabAdminModels.UpdateCloudScriptRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateCloudScriptResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates a existing Player Shared Secret Key. It may take up to 5 minutes for this update to become generally available
         * after this API returns.
         * https://api.playfab.com/Documentation/Admin/method/UpdatePlayerSharedSecret
         */
        UpdatePlayerSharedSecret(request: PlayFabAdminModels.UpdatePlayerSharedSecretRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerSharedSecretResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates a player statistic configuration for the title, optionally allowing the developer to specify a reset interval.
         * https://api.playfab.com/Documentation/Admin/method/UpdatePlayerStatisticDefinition
         */
        UpdatePlayerStatisticDefinition(request: PlayFabAdminModels.UpdatePlayerStatisticDefinitionRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePlayerStatisticDefinitionResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Changes a policy for a title
         * https://api.playfab.com/Documentation/Admin/method/UpdatePolicy
         */
        UpdatePolicy(request: PlayFabAdminModels.UpdatePolicyRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdatePolicyResponse>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the random drop table configuration for the title
         * https://api.playfab.com/Documentation/Admin/method/UpdateRandomResultTables
         */
        UpdateRandomResultTables(request: PlayFabAdminModels.UpdateRandomResultTablesRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateRandomResultTablesResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates an existing virtual item store with new or modified items
         * https://api.playfab.com/Documentation/Admin/method/UpdateStoreItems
         */
        UpdateStoreItems(request: PlayFabAdminModels.UpdateStoreItemsRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateStoreItemsResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Update an existing task.
         * https://api.playfab.com/Documentation/Admin/method/UpdateTask
         */
        UpdateTask(request: PlayFabAdminModels.UpdateTaskRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.EmptyResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the title-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserData
         */
        UpdateUserData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the title-specific custom data for the user which cannot be accessed by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserInternalData
         */
        UpdateUserInternalData(request: PlayFabAdminModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the publisher-specific custom data for the user which is readable and writable by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserPublisherData
         */
        UpdateUserPublisherData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the publisher-specific custom data for the user which cannot be accessed by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserPublisherInternalData
         */
        UpdateUserPublisherInternalData(request: PlayFabAdminModels.UpdateUserInternalDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the publisher-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserPublisherReadOnlyData
         */
        UpdateUserPublisherReadOnlyData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the title-specific custom data for the user which can only be read by the client
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserReadOnlyData
         */
        UpdateUserReadOnlyData(request: PlayFabAdminModels.UpdateUserDataRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserDataResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;
        /**
         * Updates the title specific display name for a user
         * https://api.playfab.com/Documentation/Admin/method/UpdateUserTitleDisplayName
         */
        UpdateUserTitleDisplayName(request: PlayFabAdminModels.UpdateUserTitleDisplayNameRequest, callback: PlayFabModule.ApiCallback<PlayFabAdminModels.UpdateUserTitleDisplayNameResult>, customData?: any, extraHeaders?: { [key: string]: string }): void;

    }
}

declare module PlayFabAdminModels {
    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AbortTaskInstanceRequest */
    export interface AbortTaskInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of a task instance that is being aborted. */
        TaskInstanceId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ActionsOnPlayersInSegmentTaskParameter */
    export interface ActionsOnPlayersInSegmentTaskParameter {
        /** ID of the action to perform on each player in segment. */
        ActionId: string;
        /** ID of the segment to perform actions on. */
        SegmentId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ActionsOnPlayersInSegmentTaskSummary */
    export interface ActionsOnPlayersInSegmentTaskSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Error message for last processing attempt, if an error occured. */
        ErrorMessage?: string;
        /** Flag indicating if the error was fatal, if false job will be retried. */
        ErrorWasFatal?: boolean;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;
        /** Total players in segment when task was started. */
        TotalPlayersInSegment?: number;
        /** Total number of players that have had the actions applied to. */
        TotalPlayersProcessed?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AdCampaignAttribution */
    export interface AdCampaignAttribution {
        /** UTC time stamp of attribution */
        AttributedAt: string;
        /** Attribution campaign identifier */
        CampaignId?: string;
        /** Attribution network name */
        Platform?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AdCampaignAttributionModel */
    export interface AdCampaignAttributionModel {
        /** UTC time stamp of attribution */
        AttributedAt: string;
        /** Attribution campaign identifier */
        CampaignId?: string;
        /** Attribution network name */
        Platform?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddNewsRequest */
    export interface AddNewsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Body text of the news */
        Body: string;
        /** Time this news was published. If not set, defaults to now. */
        Timestamp?: string;
        /** Title (headline) of the news item */
        Title: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddNewsResult */
    export interface AddNewsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique id of the new news item */
        NewsId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddPlayerTagRequest */
    export interface AddPlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Unique tag for player profile. */
        TagName: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddPlayerTagResult */
    export interface AddPlayerTagResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddServerBuildRequest */
    export interface AddServerBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** server host regions in which this build should be running and available */
        ActiveRegions?: string[];
        /** unique identifier for the build executable */
        BuildId: string;
        /** appended to the end of the command line when starting game servers */
        CommandLineTemplate?: string;
        /** developer comment(s) for this build */
        Comment?: string;
        /** path to the game server executable. Defaults to gameserver.exe */
        ExecutablePath?: string;
        /** maximum number of game server instances that can run on a single host machine */
        MaxGamesPerHost: number;
        /**
         * minimum capacity of additional game server instances that can be started before the autoscaling service starts new host
         * machines (given the number of current running host machines and game server instances)
         */
        MinFreeGameSlots: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddServerBuildResult */
    export interface AddServerBuildResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of regions where this build can used, when it is active */
        ActiveRegions?: string[];
        /** unique identifier for this build executable */
        BuildId?: string;
        /** appended to the end of the command line when starting game servers */
        CommandLineTemplate?: string;
        /** developer comment(s) for this build */
        Comment?: string;
        /** path to the game server executable. Defaults to gameserver.exe */
        ExecutablePath?: string;
        /** maximum number of game server instances that can run on a single host machine */
        MaxGamesPerHost: number;
        /**
         * minimum capacity of additional game server instances that can be started before the autoscaling service starts new host
         * machines (given the number of current running host machines and game server instances)
         */
        MinFreeGameSlots: number;
        /** the current status of the build validation and processing steps */
        Status?: string;
        /** time this build was last modified (or uploaded, if this build has never been modified) */
        Timestamp: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddUserVirtualCurrencyRequest */
    export interface AddUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Amount to be added to the user balance of the specified virtual currency. Maximum VC balance is Int32 (2,147,483,647).
         * Any increase over this value will be discarded.
         */
        Amount: number;
        /** PlayFab unique identifier of the user whose virtual currency balance is to be increased. */
        PlayFabId: string;
        /** Name of the virtual currency which is to be incremented. */
        VirtualCurrency: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.AddVirtualCurrencyTypesRequest */
    export interface AddVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * List of virtual currencies and their initial deposits (the amount a user is granted when signing in for the first time)
         * to the title
         */
        VirtualCurrencies: VirtualCurrencyData[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ApiCondition */
    export interface ApiCondition {
        /** Require that API calls contain an RSA encrypted payload or signed headers. */
        HasSignatureOrEncryption?: string;

    }

    type AuthTokenType = "Email"

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.BanInfo */
    export interface BanInfo {
        /** The active state of this ban. Expired bans may still have this value set to true but they will have no effect. */
        Active: boolean;
        /** The unique Ban Id associated with this ban. */
        BanId?: string;
        /** The time when this ban was applied. */
        Created?: string;
        /** The time when this ban expires. Permanent bans do not have expiration date. */
        Expires?: string;
        /** The IP address on which the ban was applied. May affect multiple players. */
        IPAddress?: string;
        /** The MAC address on which the ban was applied. May affect multiple players. */
        MACAddress?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** The reason why this ban was applied. */
        Reason?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.BanRequest */
    export interface BanRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The duration in hours for the ban. Leave this blank for a permanent ban. */
        DurationInHours?: number;
        /** IP address to be banned. May affect multiple players. */
        IPAddress?: string;
        /** MAC address to be banned. May affect multiple players. */
        MACAddress?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** The reason for this ban. Maximum 140 characters. */
        Reason?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.BanUsersRequest */
    export interface BanUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of ban requests to be applied. Maximum 100. */
        Bans: BanRequest[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.BanUsersResult */
    export interface BanUsersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were applied */
        BanData?: BanInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.BlankResult */
    export interface BlankResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CatalogItem */
    export interface CatalogItem {
        /**
         * defines the bundle properties for the item - bundles are items which contain other items, including random drop tables
         * and virtual currencies
         */
        Bundle?: CatalogItemBundleInfo;
        /** if true, then an item instance of this type can be used to grant a character to a user. */
        CanBecomeCharacter: boolean;
        /** catalog version for this item */
        CatalogVersion?: string;
        /** defines the consumable properties (number of uses, timeout) for the item */
        Consumable?: CatalogItemConsumableInfo;
        /**
         * defines the container properties for the item - what items it contains, including random drop tables and virtual
         * currencies, and what item (if any) is required to open it via the UnlockContainerItem API
         */
        Container?: CatalogItemContainerInfo;
        /** game specific custom data */
        CustomData?: string;
        /** text description of item, to show in-game */
        Description?: string;
        /** text name for the item, to show in-game */
        DisplayName?: string;
        /**
         * If the item has IsLImitedEdition set to true, and this is the first time this ItemId has been defined as a limited
         * edition item, this value determines the total number of instances to allocate for the title. Once this limit has been
         * reached, no more instances of this ItemId can be created, and attempts to purchase or grant it will return a Result of
         * false for that ItemId. If the item has already been defined to have a limited edition count, or if this value is less
         * than zero, it will be ignored.
         */
        InitialLimitedEditionCount: number;
        /** BETA: If true, then only a fixed number can ever be granted. */
        IsLimitedEdition: boolean;
        /**
         * if true, then only one item instance of this type will exist and its remaininguses will be incremented instead.
         * RemainingUses will cap out at Int32.Max (2,147,483,647). All subsequent increases will be discarded
         */
        IsStackable: boolean;
        /** if true, then an item instance of this type can be traded between players using the trading APIs */
        IsTradable: boolean;
        /** class to which the item belongs */
        ItemClass?: string;
        /** unique identifier for this item */
        ItemId: string;
        /**
         * URL to the item image. For Facebook purchase to display the image on the item purchase page, this must be set to an HTTP
         * URL.
         */
        ItemImageUrl?: string;
        /** override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number };
        /** list of item tags */
        Tags?: string[];
        /** price of this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CatalogItemBundleInfo */
    export interface CatalogItemBundleInfo {
        /** unique ItemId values for all items which will be added to the player inventory when the bundle is added */
        BundledItems?: string[];
        /**
         * unique TableId values for all RandomResultTable objects which are part of the bundle (random tables will be resolved and
         * add the relevant items to the player inventory when the bundle is added)
         */
        BundledResultTables?: string[];
        /** virtual currency types and balances which will be added to the player inventory when the bundle is added */
        BundledVirtualCurrencies?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CatalogItemConsumableInfo */
    export interface CatalogItemConsumableInfo {
        /** number of times this object can be used, after which it will be removed from the player inventory */
        UsageCount?: number;
        /**
         * duration in seconds for how long the item will remain in the player inventory - once elapsed, the item will be removed
         * (recommended minimum value is 5 seconds, as lower values can cause the item to expire before operations depending on
         * this item's details have completed)
         */
        UsagePeriod?: number;
        /**
         * all inventory item instances in the player inventory sharing a non-null UsagePeriodGroup have their UsagePeriod values
         * added together, and share the result - when that period has elapsed, all the items in the group will be removed
         */
        UsagePeriodGroup?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CatalogItemContainerInfo */
    export interface CatalogItemContainerInfo {
        /** unique ItemId values for all items which will be added to the player inventory, once the container has been unlocked */
        ItemContents?: string[];
        /**
         * ItemId for the catalog item used to unlock the container, if any (if not specified, a call to UnlockContainerItem will
         * open the container, adding the contents to the player inventory and currency balances)
         */
        KeyItemId?: string;
        /**
         * unique TableId values for all RandomResultTable objects which are part of the container (once unlocked, random tables
         * will be resolved and add the relevant items to the player inventory)
         */
        ResultTableContents?: string[];
        /** virtual currency types and balances which will be added to the player inventory when the container is unlocked */
        VirtualCurrencyContents?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CheckLimitedEditionItemAvailabilityRequest */
    export interface CheckLimitedEditionItemAvailabilityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The item to check for. */
        ItemId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CheckLimitedEditionItemAvailabilityResult */
    export interface CheckLimitedEditionItemAvailabilityResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The amount of the specified resource remaining. */
        Amount: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CloudScriptFile */
    export interface CloudScriptFile {
        /** Contents of the Cloud Script javascript. Must be string-escaped javascript. */
        FileContents: string;
        /**
         * Name of the javascript file. These names are not used internally by the server, they are only for developer
         * organizational purposes.
         */
        Filename: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CloudScriptTaskParameter */
    export interface CloudScriptTaskParameter {
        /** Argument to pass to the CloudScript function. */
        Argument?: any;
        /** Name of the CloudScript function to execute. */
        FunctionName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CloudScriptTaskSummary */
    export interface CloudScriptTaskSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** Result of CloudScript execution */
        Result?: ExecuteCloudScriptResult;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CloudScriptVersionStatus */
    export interface CloudScriptVersionStatus {
        /** Most recent revision for this Cloud Script version */
        LatestRevision: number;
        /** Published code revision for this Cloud Script version */
        PublishedRevision: number;
        /** Version number */
        Version: number;

    }

    type Conditionals = "Any"
        | "True"
        | "False";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ContactEmailInfo */
    export interface ContactEmailInfo {
        /** The email address */
        EmailAddress?: string;
        /** The name of the email info data */
        Name?: string;
        /** The verification status of the email */
        VerificationStatus?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ContactEmailInfoModel */
    export interface ContactEmailInfoModel {
        /** The email address */
        EmailAddress?: string;
        /** The name of the email info data */
        Name?: string;
        /** The verification status of the email */
        VerificationStatus?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ContentInfo */
    export interface ContentInfo {
        /** Key of the content */
        Key?: string;
        /** Last modified time */
        LastModified: string;
        /** Size of the content in bytes */
        Size: number;

    }

    type ContinentCode = "AF"
        | "AN"
        | "AS"
        | "EU"
        | "NA"
        | "OC"
        | "SA";

    type CountryCode = "AF"
        | "AX"
        | "AL"
        | "DZ"
        | "AS"
        | "AD"
        | "AO"
        | "AI"
        | "AQ"
        | "AG"
        | "AR"
        | "AM"
        | "AW"
        | "AU"
        | "AT"
        | "AZ"
        | "BS"
        | "BH"
        | "BD"
        | "BB"
        | "BY"
        | "BE"
        | "BZ"
        | "BJ"
        | "BM"
        | "BT"
        | "BO"
        | "BQ"
        | "BA"
        | "BW"
        | "BV"
        | "BR"
        | "IO"
        | "BN"
        | "BG"
        | "BF"
        | "BI"
        | "KH"
        | "CM"
        | "CA"
        | "CV"
        | "KY"
        | "CF"
        | "TD"
        | "CL"
        | "CN"
        | "CX"
        | "CC"
        | "CO"
        | "KM"
        | "CG"
        | "CD"
        | "CK"
        | "CR"
        | "CI"
        | "HR"
        | "CU"
        | "CW"
        | "CY"
        | "CZ"
        | "DK"
        | "DJ"
        | "DM"
        | "DO"
        | "EC"
        | "EG"
        | "SV"
        | "GQ"
        | "ER"
        | "EE"
        | "ET"
        | "FK"
        | "FO"
        | "FJ"
        | "FI"
        | "FR"
        | "GF"
        | "PF"
        | "TF"
        | "GA"
        | "GM"
        | "GE"
        | "DE"
        | "GH"
        | "GI"
        | "GR"
        | "GL"
        | "GD"
        | "GP"
        | "GU"
        | "GT"
        | "GG"
        | "GN"
        | "GW"
        | "GY"
        | "HT"
        | "HM"
        | "VA"
        | "HN"
        | "HK"
        | "HU"
        | "IS"
        | "IN"
        | "ID"
        | "IR"
        | "IQ"
        | "IE"
        | "IM"
        | "IL"
        | "IT"
        | "JM"
        | "JP"
        | "JE"
        | "JO"
        | "KZ"
        | "KE"
        | "KI"
        | "KP"
        | "KR"
        | "KW"
        | "KG"
        | "LA"
        | "LV"
        | "LB"
        | "LS"
        | "LR"
        | "LY"
        | "LI"
        | "LT"
        | "LU"
        | "MO"
        | "MK"
        | "MG"
        | "MW"
        | "MY"
        | "MV"
        | "ML"
        | "MT"
        | "MH"
        | "MQ"
        | "MR"
        | "MU"
        | "YT"
        | "MX"
        | "FM"
        | "MD"
        | "MC"
        | "MN"
        | "ME"
        | "MS"
        | "MA"
        | "MZ"
        | "MM"
        | "NA"
        | "NR"
        | "NP"
        | "NL"
        | "NC"
        | "NZ"
        | "NI"
        | "NE"
        | "NG"
        | "NU"
        | "NF"
        | "MP"
        | "NO"
        | "OM"
        | "PK"
        | "PW"
        | "PS"
        | "PA"
        | "PG"
        | "PY"
        | "PE"
        | "PH"
        | "PN"
        | "PL"
        | "PT"
        | "PR"
        | "QA"
        | "RE"
        | "RO"
        | "RU"
        | "RW"
        | "BL"
        | "SH"
        | "KN"
        | "LC"
        | "MF"
        | "PM"
        | "VC"
        | "WS"
        | "SM"
        | "ST"
        | "SA"
        | "SN"
        | "RS"
        | "SC"
        | "SL"
        | "SG"
        | "SX"
        | "SK"
        | "SI"
        | "SB"
        | "SO"
        | "ZA"
        | "GS"
        | "SS"
        | "ES"
        | "LK"
        | "SD"
        | "SR"
        | "SJ"
        | "SZ"
        | "SE"
        | "CH"
        | "SY"
        | "TW"
        | "TJ"
        | "TZ"
        | "TH"
        | "TL"
        | "TG"
        | "TK"
        | "TO"
        | "TT"
        | "TN"
        | "TR"
        | "TM"
        | "TC"
        | "TV"
        | "UG"
        | "UA"
        | "AE"
        | "GB"
        | "US"
        | "UM"
        | "UY"
        | "UZ"
        | "VU"
        | "VE"
        | "VN"
        | "VG"
        | "VI"
        | "WF"
        | "EH"
        | "YE"
        | "ZM"
        | "ZW";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreateActionsOnPlayerSegmentTaskRequest */
    export interface CreateActionsOnPlayerSegmentTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Task details related to segment and action */
        Parameter: ActionsOnPlayersInSegmentTaskParameter;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreateCloudScriptTaskRequest */
    export interface CreateCloudScriptTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Task details related to CloudScript */
        Parameter: CloudScriptTaskParameter;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreatePlayerSharedSecretRequest */
    export interface CreatePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Friendly name for this key */
        FriendlyName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreatePlayerSharedSecretResult */
    export interface CreatePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SecretKey?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreatePlayerStatisticDefinitionRequest */
    export interface CreatePlayerStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** unique name of the statistic */
        StatisticName: string;
        /** interval at which the values of the statistic for all players are reset (resets begin at the next interval boundary) */
        VersionChangeInterval?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreatePlayerStatisticDefinitionResult */
    export interface CreatePlayerStatisticDefinitionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** created statistic definition */
        Statistic?: PlayerStatisticDefinition;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.CreateTaskResult */
    export interface CreateTaskResult extends PlayFabModule.IPlayFabResultCommon  {
        /** ID of the task */
        TaskId?: string;

    }

    type Currency = "AED"
        | "AFN"
        | "ALL"
        | "AMD"
        | "ANG"
        | "AOA"
        | "ARS"
        | "AUD"
        | "AWG"
        | "AZN"
        | "BAM"
        | "BBD"
        | "BDT"
        | "BGN"
        | "BHD"
        | "BIF"
        | "BMD"
        | "BND"
        | "BOB"
        | "BRL"
        | "BSD"
        | "BTN"
        | "BWP"
        | "BYR"
        | "BZD"
        | "CAD"
        | "CDF"
        | "CHF"
        | "CLP"
        | "CNY"
        | "COP"
        | "CRC"
        | "CUC"
        | "CUP"
        | "CVE"
        | "CZK"
        | "DJF"
        | "DKK"
        | "DOP"
        | "DZD"
        | "EGP"
        | "ERN"
        | "ETB"
        | "EUR"
        | "FJD"
        | "FKP"
        | "GBP"
        | "GEL"
        | "GGP"
        | "GHS"
        | "GIP"
        | "GMD"
        | "GNF"
        | "GTQ"
        | "GYD"
        | "HKD"
        | "HNL"
        | "HRK"
        | "HTG"
        | "HUF"
        | "IDR"
        | "ILS"
        | "IMP"
        | "INR"
        | "IQD"
        | "IRR"
        | "ISK"
        | "JEP"
        | "JMD"
        | "JOD"
        | "JPY"
        | "KES"
        | "KGS"
        | "KHR"
        | "KMF"
        | "KPW"
        | "KRW"
        | "KWD"
        | "KYD"
        | "KZT"
        | "LAK"
        | "LBP"
        | "LKR"
        | "LRD"
        | "LSL"
        | "LYD"
        | "MAD"
        | "MDL"
        | "MGA"
        | "MKD"
        | "MMK"
        | "MNT"
        | "MOP"
        | "MRO"
        | "MUR"
        | "MVR"
        | "MWK"
        | "MXN"
        | "MYR"
        | "MZN"
        | "NAD"
        | "NGN"
        | "NIO"
        | "NOK"
        | "NPR"
        | "NZD"
        | "OMR"
        | "PAB"
        | "PEN"
        | "PGK"
        | "PHP"
        | "PKR"
        | "PLN"
        | "PYG"
        | "QAR"
        | "RON"
        | "RSD"
        | "RUB"
        | "RWF"
        | "SAR"
        | "SBD"
        | "SCR"
        | "SDG"
        | "SEK"
        | "SGD"
        | "SHP"
        | "SLL"
        | "SOS"
        | "SPL"
        | "SRD"
        | "STD"
        | "SVC"
        | "SYP"
        | "SZL"
        | "THB"
        | "TJS"
        | "TMT"
        | "TND"
        | "TOP"
        | "TRY"
        | "TTD"
        | "TVD"
        | "TWD"
        | "TZS"
        | "UAH"
        | "UGX"
        | "USD"
        | "UYU"
        | "UZS"
        | "VEF"
        | "VND"
        | "VUV"
        | "WST"
        | "XAF"
        | "XCD"
        | "XDR"
        | "XOF"
        | "XPF"
        | "YER"
        | "ZAR"
        | "ZMW"
        | "ZWD";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteContentRequest */
    export interface DeleteContentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Key of the content item to be deleted */
        Key: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeletePlayerRequest */
    export interface DeletePlayerRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeletePlayerResult */
    export interface DeletePlayerResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeletePlayerSharedSecretRequest */
    export interface DeletePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The shared secret key to delete */
        SecretKey?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeletePlayerSharedSecretResult */
    export interface DeletePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteStoreRequest */
    export interface DeleteStoreRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version of the store to delete. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** unqiue identifier for the store which is to be deleted */
        StoreId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteStoreResult */
    export interface DeleteStoreResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteTaskRequest */
    export interface DeleteTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specify either the task ID or the name of task to be deleted. */
        Identifier?: NameIdentifier;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteTitleRequest */
    export interface DeleteTitleRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteTitleResult */
    export interface DeleteTitleResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteUsersRequest */
    export interface DeleteUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** An array of unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabIds: string[];
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.DeleteUsersResult */
    export interface DeleteUsersResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type EffectType = "Allow"
        | "Deny";

    type EmailVerificationStatus = "Unverified"
        | "Pending"
        | "Confirmed";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.EmptyResult */
    export interface EmptyResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.EntityKey */
    export interface EntityKey {
        /** Entity profile ID. */
        Id: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        Type?: string;
        /** Entity type. Optional to be used but one of EntityType or EntityTypeString must be set. */
        TypeString?: string;

    }

    type EntityTypes = "title"
        | "master_player_account"
        | "title_player_account"
        | "character"
        | "group";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ExecuteCloudScriptResult */
    export interface ExecuteCloudScriptResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Number of PlayFab API requests issued by the CloudScript function */
        APIRequestsIssued: number;
        /** Information about the error, if any, that occurred during execution */
        Error?: ScriptExecutionError;
        ExecutionTimeSeconds: number;
        /** The name of the function that executed */
        FunctionName?: string;
        /** The object returned from the CloudScript function, if any */
        FunctionResult?: any;
        /**
         * Flag indicating if the FunctionResult was too large and was subsequently dropped from this event. This only occurs if
         * the total event size is larger than 350KB.
         */
        FunctionResultTooLarge?: boolean;
        /** Number of external HTTP requests issued by the CloudScript function */
        HttpRequestsIssued: number;
        /**
         * Entries logged during the function execution. These include both entries logged in the function code using log.info()
         * and log.error() and error entries for API and HTTP request failures.
         */
        Logs?: LogStatement[];
        /**
         * Flag indicating if the logs were too large and were subsequently dropped from this event. This only occurs if the total
         * event size is larger than 350KB after the FunctionResult was removed.
         */
        LogsTooLarge?: boolean;
        MemoryConsumedBytes: number;
        /**
         * Processor time consumed while executing the function. This does not include time spent waiting on API calls or HTTP
         * requests.
         */
        ProcessorTimeSeconds: number;
        /** The revision of the CloudScript that executed */
        Revision: number;

    }

    type GameBuildStatus = "Available"
        | "Validating"
        | "InvalidBuildPackage"
        | "Processing"
        | "FailedToProcess";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GameModeInfo */
    export interface GameModeInfo {
        /** specific game mode type */
        Gamemode: string;
        /** maximum user count a specific Game Server Instance can support */
        MaxPlayerCount: number;
        /** minimum user count required for this Game Server Instance to continue (usually 1) */
        MinPlayerCount: number;
        /** whether to start as an open session, meaning that players can matchmake into it (defaults to true) */
        StartOpen?: boolean;

    }

    type GenericErrorCodes = "Success"
        | "InvalidParams"
        | "AccountNotFound"
        | "AccountBanned"
        | "InvalidUsernameOrPassword"
        | "InvalidTitleId"
        | "InvalidEmailAddress"
        | "EmailAddressNotAvailable"
        | "InvalidUsername"
        | "InvalidPassword"
        | "UsernameNotAvailable"
        | "InvalidSteamTicket"
        | "AccountAlreadyLinked"
        | "LinkedAccountAlreadyClaimed"
        | "InvalidFacebookToken"
        | "AccountNotLinked"
        | "FailedByPaymentProvider"
        | "CouponCodeNotFound"
        | "InvalidContainerItem"
        | "ContainerNotOwned"
        | "KeyNotOwned"
        | "InvalidItemIdInTable"
        | "InvalidReceipt"
        | "ReceiptAlreadyUsed"
        | "ReceiptCancelled"
        | "GameNotFound"
        | "GameModeNotFound"
        | "InvalidGoogleToken"
        | "UserIsNotPartOfDeveloper"
        | "InvalidTitleForDeveloper"
        | "TitleNameConflicts"
        | "UserisNotValid"
        | "ValueAlreadyExists"
        | "BuildNotFound"
        | "PlayerNotInGame"
        | "InvalidTicket"
        | "InvalidDeveloper"
        | "InvalidOrderInfo"
        | "RegistrationIncomplete"
        | "InvalidPlatform"
        | "UnknownError"
        | "SteamApplicationNotOwned"
        | "WrongSteamAccount"
        | "TitleNotActivated"
        | "RegistrationSessionNotFound"
        | "NoSuchMod"
        | "FileNotFound"
        | "DuplicateEmail"
        | "ItemNotFound"
        | "ItemNotOwned"
        | "ItemNotRecycleable"
        | "ItemNotAffordable"
        | "InvalidVirtualCurrency"
        | "WrongVirtualCurrency"
        | "WrongPrice"
        | "NonPositiveValue"
        | "InvalidRegion"
        | "RegionAtCapacity"
        | "ServerFailedToStart"
        | "NameNotAvailable"
        | "InsufficientFunds"
        | "InvalidDeviceID"
        | "InvalidPushNotificationToken"
        | "NoRemainingUses"
        | "InvalidPaymentProvider"
        | "PurchaseInitializationFailure"
        | "DuplicateUsername"
        | "InvalidBuyerInfo"
        | "NoGameModeParamsSet"
        | "BodyTooLarge"
        | "ReservedWordInBody"
        | "InvalidTypeInBody"
        | "InvalidRequest"
        | "ReservedEventName"
        | "InvalidUserStatistics"
        | "NotAuthenticated"
        | "StreamAlreadyExists"
        | "ErrorCreatingStream"
        | "StreamNotFound"
        | "InvalidAccount"
        | "PurchaseDoesNotExist"
        | "InvalidPurchaseTransactionStatus"
        | "APINotEnabledForGameClientAccess"
        | "NoPushNotificationARNForTitle"
        | "BuildAlreadyExists"
        | "BuildPackageDoesNotExist"
        | "CustomAnalyticsEventsNotEnabledForTitle"
        | "InvalidSharedGroupId"
        | "NotAuthorized"
        | "MissingTitleGoogleProperties"
        | "InvalidItemProperties"
        | "InvalidPSNAuthCode"
        | "InvalidItemId"
        | "PushNotEnabledForAccount"
        | "PushServiceError"
        | "ReceiptDoesNotContainInAppItems"
        | "ReceiptContainsMultipleInAppItems"
        | "InvalidBundleID"
        | "JavascriptException"
        | "InvalidSessionTicket"
        | "UnableToConnectToDatabase"
        | "InternalServerError"
        | "InvalidReportDate"
        | "ReportNotAvailable"
        | "DatabaseThroughputExceeded"
        | "InvalidGameTicket"
        | "ExpiredGameTicket"
        | "GameTicketDoesNotMatchLobby"
        | "LinkedDeviceAlreadyClaimed"
        | "DeviceAlreadyLinked"
        | "DeviceNotLinked"
        | "PartialFailure"
        | "PublisherNotSet"
        | "ServiceUnavailable"
        | "VersionNotFound"
        | "RevisionNotFound"
        | "InvalidPublisherId"
        | "DownstreamServiceUnavailable"
        | "APINotIncludedInTitleUsageTier"
        | "DAULimitExceeded"
        | "APIRequestLimitExceeded"
        | "InvalidAPIEndpoint"
        | "BuildNotAvailable"
        | "ConcurrentEditError"
        | "ContentNotFound"
        | "CharacterNotFound"
        | "CloudScriptNotFound"
        | "ContentQuotaExceeded"
        | "InvalidCharacterStatistics"
        | "PhotonNotEnabledForTitle"
        | "PhotonApplicationNotFound"
        | "PhotonApplicationNotAssociatedWithTitle"
        | "InvalidEmailOrPassword"
        | "FacebookAPIError"
        | "InvalidContentType"
        | "KeyLengthExceeded"
        | "DataLengthExceeded"
        | "TooManyKeys"
        | "FreeTierCannotHaveVirtualCurrency"
        | "MissingAmazonSharedKey"
        | "AmazonValidationError"
        | "InvalidPSNIssuerId"
        | "PSNInaccessible"
        | "ExpiredAuthToken"
        | "FailedToGetEntitlements"
        | "FailedToConsumeEntitlement"
        | "TradeAcceptingUserNotAllowed"
        | "TradeInventoryItemIsAssignedToCharacter"
        | "TradeInventoryItemIsBundle"
        | "TradeStatusNotValidForCancelling"
        | "TradeStatusNotValidForAccepting"
        | "TradeDoesNotExist"
        | "TradeCancelled"
        | "TradeAlreadyFilled"
        | "TradeWaitForStatusTimeout"
        | "TradeInventoryItemExpired"
        | "TradeMissingOfferedAndAcceptedItems"
        | "TradeAcceptedItemIsBundle"
        | "TradeAcceptedItemIsStackable"
        | "TradeInventoryItemInvalidStatus"
        | "TradeAcceptedCatalogItemInvalid"
        | "TradeAllowedUsersInvalid"
        | "TradeInventoryItemDoesNotExist"
        | "TradeInventoryItemIsConsumed"
        | "TradeInventoryItemIsStackable"
        | "TradeAcceptedItemsMismatch"
        | "InvalidKongregateToken"
        | "FeatureNotConfiguredForTitle"
        | "NoMatchingCatalogItemForReceipt"
        | "InvalidCurrencyCode"
        | "NoRealMoneyPriceForCatalogItem"
        | "TradeInventoryItemIsNotTradable"
        | "TradeAcceptedCatalogItemIsNotTradable"
        | "UsersAlreadyFriends"
        | "LinkedIdentifierAlreadyClaimed"
        | "CustomIdNotLinked"
        | "TotalDataSizeExceeded"
        | "DeleteKeyConflict"
        | "InvalidXboxLiveToken"
        | "ExpiredXboxLiveToken"
        | "ResettableStatisticVersionRequired"
        | "NotAuthorizedByTitle"
        | "NoPartnerEnabled"
        | "InvalidPartnerResponse"
        | "APINotEnabledForGameServerAccess"
        | "StatisticNotFound"
        | "StatisticNameConflict"
        | "StatisticVersionClosedForWrites"
        | "StatisticVersionInvalid"
        | "APIClientRequestRateLimitExceeded"
        | "InvalidJSONContent"
        | "InvalidDropTable"
        | "StatisticVersionAlreadyIncrementedForScheduledInterval"
        | "StatisticCountLimitExceeded"
        | "StatisticVersionIncrementRateExceeded"
        | "ContainerKeyInvalid"
        | "CloudScriptExecutionTimeLimitExceeded"
        | "NoWritePermissionsForEvent"
        | "CloudScriptFunctionArgumentSizeExceeded"
        | "CloudScriptAPIRequestCountExceeded"
        | "CloudScriptAPIRequestError"
        | "CloudScriptHTTPRequestError"
        | "InsufficientGuildRole"
        | "GuildNotFound"
        | "OverLimit"
        | "EventNotFound"
        | "InvalidEventField"
        | "InvalidEventName"
        | "CatalogNotConfigured"
        | "OperationNotSupportedForPlatform"
        | "SegmentNotFound"
        | "StoreNotFound"
        | "InvalidStatisticName"
        | "TitleNotQualifiedForLimit"
        | "InvalidServiceLimitLevel"
        | "ServiceLimitLevelInTransition"
        | "CouponAlreadyRedeemed"
        | "GameServerBuildSizeLimitExceeded"
        | "GameServerBuildCountLimitExceeded"
        | "VirtualCurrencyCountLimitExceeded"
        | "VirtualCurrencyCodeExists"
        | "TitleNewsItemCountLimitExceeded"
        | "InvalidTwitchToken"
        | "TwitchResponseError"
        | "ProfaneDisplayName"
        | "UserAlreadyAdded"
        | "InvalidVirtualCurrencyCode"
        | "VirtualCurrencyCannotBeDeleted"
        | "IdentifierAlreadyClaimed"
        | "IdentifierNotLinked"
        | "InvalidContinuationToken"
        | "ExpiredContinuationToken"
        | "InvalidSegment"
        | "InvalidSessionId"
        | "SessionLogNotFound"
        | "InvalidSearchTerm"
        | "TwoFactorAuthenticationTokenRequired"
        | "GameServerHostCountLimitExceeded"
        | "PlayerTagCountLimitExceeded"
        | "RequestAlreadyRunning"
        | "ActionGroupNotFound"
        | "MaximumSegmentBulkActionJobsRunning"
        | "NoActionsOnPlayersInSegmentJob"
        | "DuplicateStatisticName"
        | "ScheduledTaskNameConflict"
        | "ScheduledTaskCreateConflict"
        | "InvalidScheduledTaskName"
        | "InvalidTaskSchedule"
        | "SteamNotEnabledForTitle"
        | "LimitNotAnUpgradeOption"
        | "NoSecretKeyEnabledForCloudScript"
        | "TaskNotFound"
        | "TaskInstanceNotFound"
        | "InvalidIdentityProviderId"
        | "MisconfiguredIdentityProvider"
        | "InvalidScheduledTaskType"
        | "BillingInformationRequired"
        | "LimitedEditionItemUnavailable"
        | "InvalidAdPlacementAndReward"
        | "AllAdPlacementViewsAlreadyConsumed"
        | "GoogleOAuthNotConfiguredForTitle"
        | "GoogleOAuthError"
        | "UserNotFriend"
        | "InvalidSignature"
        | "InvalidPublicKey"
        | "GoogleOAuthNoIdTokenIncludedInResponse"
        | "StatisticUpdateInProgress"
        | "LeaderboardVersionNotAvailable"
        | "StatisticAlreadyHasPrizeTable"
        | "PrizeTableHasOverlappingRanks"
        | "PrizeTableHasMissingRanks"
        | "PrizeTableRankStartsAtZero"
        | "InvalidStatistic"
        | "ExpressionParseFailure"
        | "ExpressionInvokeFailure"
        | "ExpressionTooLong"
        | "DataUpdateRateExceeded"
        | "RestrictedEmailDomain"
        | "EncryptionKeyDisabled"
        | "EncryptionKeyMissing"
        | "EncryptionKeyBroken"
        | "NoSharedSecretKeyConfigured"
        | "SecretKeyNotFound"
        | "PlayerSecretAlreadyConfigured"
        | "APIRequestsDisabledForTitle"
        | "InvalidSharedSecretKey"
        | "PrizeTableHasNoRanks"
        | "ProfileDoesNotExist"
        | "ContentS3OriginBucketNotConfigured"
        | "InvalidEnvironmentForReceipt"
        | "EncryptedRequestNotAllowed"
        | "SignedRequestNotAllowed"
        | "RequestViewConstraintParamsNotAllowed"
        | "BadPartnerConfiguration"
        | "XboxBPCertificateFailure"
        | "XboxXASSExchangeFailure"
        | "InvalidEntityId"
        | "StatisticValueAggregationOverflow"
        | "EmailMessageFromAddressIsMissing"
        | "EmailMessageToAddressIsMissing"
        | "SmtpServerAuthenticationError"
        | "SmtpServerLimitExceeded"
        | "SmtpServerInsufficientStorage"
        | "SmtpServerCommunicationError"
        | "SmtpServerGeneralFailure"
        | "EmailClientTimeout"
        | "EmailClientCanceledTask"
        | "EmailTemplateMissing"
        | "InvalidHostForTitleId"
        | "EmailConfirmationTokenDoesNotExist"
        | "EmailConfirmationTokenExpired"
        | "AccountDeleted"
        | "PlayerSecretNotConfigured"
        | "InvalidSignatureTime"
        | "NoContactEmailAddressFound"
        | "InvalidAuthToken"
        | "AuthTokenDoesNotExist"
        | "AuthTokenExpired"
        | "AuthTokenAlreadyUsedToResetPassword"
        | "MembershipNameTooLong"
        | "MembershipNotFound"
        | "GoogleServiceAccountInvalid"
        | "GoogleServiceAccountParseFailure"
        | "EntityTokenMissing"
        | "EntityTokenInvalid"
        | "EntityTokenExpired"
        | "EntityTokenRevoked"
        | "InvalidProductForSubscription"
        | "XboxInaccessible"
        | "SubscriptionAlreadyTaken"
        | "SmtpAddonNotEnabled"
        | "APIConcurrentRequestLimitExceeded"
        | "XboxRejectedXSTSExchangeRequest"
        | "VariableNotDefined"
        | "TemplateVersionNotDefined"
        | "FileTooLarge"
        | "TitleDeleted"
        | "TitleContainsUserAccounts"
        | "TitleDeletionPlayerCleanupFailure"
        | "EntityFileOperationPending"
        | "NoEntityFileOperationPending"
        | "EntityProfileVersionMismatch"
        | "TemplateVersionTooOld"
        | "MembershipDefinitionInUse"
        | "PaymentPageNotConfigured"
        | "FailedLoginAttemptRateLimitExceeded"
        | "EntityBlockedByGroup"
        | "RoleDoesNotExist"
        | "EntityIsAlreadyMember"
        | "DuplicateRoleId"
        | "GroupInvitationNotFound"
        | "GroupApplicationNotFound"
        | "OutstandingInvitationAcceptedInstead"
        | "OutstandingApplicationAcceptedInstead"
        | "RoleIsGroupDefaultMember"
        | "RoleIsGroupAdmin"
        | "RoleNameNotAvailable"
        | "GroupNameNotAvailable"
        | "EmailReportAlreadySent"
        | "EmailReportRecipientBlacklisted"
        | "EventNamespaceNotAllowed"
        | "EventEntityNotAllowed";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetActionsOnPlayersInSegmentTaskInstanceResult */
    export interface GetActionsOnPlayersInSegmentTaskInstanceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Parameter of this task instance */
        Parameter?: ActionsOnPlayersInSegmentTaskParameter;
        /** Status summary of the actions-on-players-in-segment task instance */
        Summary?: ActionsOnPlayersInSegmentTaskSummary;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetAllSegmentsRequest */
    export interface GetAllSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetAllSegmentsResult */
    export interface GetAllSegmentsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of segments for this title. */
        Segments?: GetSegmentResult[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCatalogItemsRequest */
    export interface GetCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Which catalog is being requested. If null, uses the default catalog. */
        CatalogVersion?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCatalogItemsResult */
    export interface GetCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items which can be purchased. */
        Catalog?: CatalogItem[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCloudScriptRevisionRequest */
    export interface GetCloudScriptRevisionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Revision number. If left null, defaults to the latest revision */
        Revision?: number;
        /** Version number. If left null, defaults to the latest version */
        Version?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCloudScriptRevisionResult */
    export interface GetCloudScriptRevisionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Time this revision was created */
        CreatedAt: string;
        /** List of Cloud Script files in this revision. */
        Files?: CloudScriptFile[];
        /** True if this is the currently published revision */
        IsPublished: boolean;
        /** Revision number. */
        Revision: number;
        /** Version number. */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCloudScriptTaskInstanceResult */
    export interface GetCloudScriptTaskInstanceResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Parameter of this task instance */
        Parameter?: CloudScriptTaskParameter;
        /** Status summary of the CloudScript task instance */
        Summary?: CloudScriptTaskSummary;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCloudScriptVersionsRequest */
    export interface GetCloudScriptVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetCloudScriptVersionsResult */
    export interface GetCloudScriptVersionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of versions */
        Versions?: CloudScriptVersionStatus[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetContentListRequest */
    export interface GetContentListRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Limits the response to keys that begin with the specified prefix. You can use prefixes to list contents under a folder,
         * or for a specified version, etc.
         */
        Prefix?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetContentListResult */
    export interface GetContentListResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of content items. */
        Contents?: ContentInfo[];
        /** Number of content items returned. We currently have a maximum of 1000 items limit. */
        ItemCount: number;
        /** The total size of listed contents in bytes. */
        TotalSize: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetContentUploadUrlRequest */
    export interface GetContentUploadUrlRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * A standard MIME type describing the format of the contents. The same MIME type has to be set in the header when
         * uploading the content. If not specified, the MIME type is 'binary/octet-stream' by default.
         */
        ContentType?: string;
        /** Key of the content item to upload, usually formatted as a path, e.g. images/a.png */
        Key: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetContentUploadUrlResult */
    export interface GetContentUploadUrlResult extends PlayFabModule.IPlayFabResultCommon  {
        /** URL for uploading content via HTTP PUT method. The URL will expire in approximately one hour. */
        URL?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetDataReportRequest */
    export interface GetDataReportRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Reporting year (UTC) */
        Day: number;
        /** Reporting month (UTC) */
        Month: number;
        /** Report name */
        ReportName: string;
        /** Reporting year (UTC) */
        Year: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetDataReportResult */
    export interface GetDataReportResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The URL where the requested report can be downloaded. */
        DownloadUrl?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetMatchmakerGameInfoRequest */
    export interface GetMatchmakerGameInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique identifier of the lobby for which info is being requested */
        LobbyId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetMatchmakerGameInfoResult */
    export interface GetMatchmakerGameInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version identifier of the game server executable binary being run */
        BuildVersion?: string;
        /** time when Game Server Instance is currently scheduled to end */
        EndTime?: string;
        /** unique identifier of the lobby */
        LobbyId?: string;
        /** game mode for this Game Server Instance */
        Mode?: string;
        /** array of unique PlayFab identifiers for users currently connected to this Game Server Instance */
        Players?: string[];
        /** region in which the Game Server Instance is running */
        Region?: string;
        /** IP address for this Game Server Instance */
        ServerAddress?: string;
        /** communication port for this Game Server Instance */
        ServerPort: number;
        /** time when the Game Server Instance was created */
        StartTime: string;
        /** unique identifier of the Game Server Instance for this lobby */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetMatchmakerGameModesRequest */
    export interface GetMatchmakerGameModesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** previously uploaded build version for which game modes are being requested */
        BuildVersion: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetMatchmakerGameModesResult */
    export interface GetMatchmakerGameModesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of game modes available for the specified build */
        GameModes?: GameModeInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerIdFromAuthTokenRequest */
    export interface GetPlayerIdFromAuthTokenRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The auth token of the player requesting the password reset. */
        Token: string;
        /** The type of auth token of the player requesting the password reset. */
        TokenType: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerIdFromAuthTokenResult */
    export interface GetPlayerIdFromAuthTokenResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player ID from the token passed in */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerProfileRequest */
    export interface GetPlayerProfileRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * If non-null, this determines which properties of the resulting player profiles to return. For API calls from the client,
         * only the allowed client profile properties for the title may be requested. These allowed properties are configured in
         * the Game Manager "Client Profile Options" tab in the "Settings" section.
         */
        ProfileConstraints?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerProfileResult */
    export interface GetPlayerProfileResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * The profile of the player. This profile is not guaranteed to be up-to-date. For a new player, this profile will not
         * exist.
         */
        PlayerProfile?: PlayerProfileModel;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerSegmentsResult */
    export interface GetPlayerSegmentsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of segments the requested player currently belongs to. */
        Segments?: GetSegmentResult[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerSharedSecretsRequest */
    export interface GetPlayerSharedSecretsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerSharedSecretsResult */
    export interface GetPlayerSharedSecretsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SharedSecrets?: SharedSecret[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayersInSegmentRequest */
    export interface GetPlayersInSegmentRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Continuation token if retrieving subsequent pages of results. */
        ContinuationToken?: string;
        /** Maximum number of profiles to load. Default is 1,000. Maximum is 10,000. */
        MaxBatchSize?: number;
        /**
         * Number of seconds to keep the continuation token active. After token expiration it is not possible to continue paging
         * results. Default is 300 (5 minutes). Maximum is 1,800 (30 minutes).
         */
        SecondsToLive?: number;
        /** Unique identifier for this segment. */
        SegmentId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayersInSegmentResult */
    export interface GetPlayersInSegmentResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Continuation token to use to retrieve subsequent pages of results. If token returns null there are no more results. */
        ContinuationToken?: string;
        /** Array of player profiles in this segment. */
        PlayerProfiles?: PlayerProfile[];
        /** Count of profiles matching this segment. */
        ProfilesInSegment: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayersSegmentsRequest */
    export interface GetPlayersSegmentsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerStatisticDefinitionsRequest */
    export interface GetPlayerStatisticDefinitionsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerStatisticDefinitionsResult */
    export interface GetPlayerStatisticDefinitionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** the player statistic definitions for the title */
        Statistics?: PlayerStatisticDefinition[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerStatisticVersionsRequest */
    export interface GetPlayerStatisticVersionsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique name of the statistic */
        StatisticName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerStatisticVersionsResult */
    export interface GetPlayerStatisticVersionsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version change history of the statistic */
        StatisticVersions?: PlayerStatisticVersion[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerTagsRequest */
    export interface GetPlayerTagsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional namespace to filter results by */
        Namespace?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPlayerTagsResult */
    export interface GetPlayerTagsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Canonical tags (including namespace and tag's name) for the requested user */
        Tags: string[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPolicyRequest */
    export interface GetPolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The name of the policy to read. Only supported name is 'ApiPolicy'. */
        PolicyName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPolicyResponse */
    export interface GetPolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The name of the policy read. */
        PolicyName?: string;
        /** The statements in the requested policy. */
        Statements?: PermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPublisherDataRequest */
    export interface GetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** array of keys to get back data from the Publisher data blob, set by the Admin tools */
        Keys: string[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetPublisherDataResult */
    export interface GetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetRandomResultTablesRequest */
    export interface GetRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version to fetch tables from. Use default catalog version if null */
        CatalogVersion?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetRandomResultTablesResult */
    export interface GetRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of random result tables currently available */
        Tables?: { [key: string]: RandomResultTableListing };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetSegmentResult */
    export interface GetSegmentResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Identifier of the segments AB Test, if it is attached to one. */
        ABTestParent?: string;
        /** Unique identifier for this segment. */
        Id: string;
        /** Segment name. */
        Name?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetServerBuildInfoRequest */
    export interface GetServerBuildInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique identifier of the previously uploaded build executable for which information is being requested */
        BuildId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetServerBuildInfoResult */
    export interface GetServerBuildInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of regions where this build can used, when it is active */
        ActiveRegions?: string[];
        /** unique identifier for this build executable */
        BuildId?: string;
        /** developer comment(s) for this build */
        Comment?: string;
        /** error message, if any, about this build */
        ErrorMessage?: string;
        /** maximum number of game server instances that can run on a single host machine */
        MaxGamesPerHost: number;
        /**
         * minimum capacity of additional game server instances that can be started before the autoscaling service starts new host
         * machines (given the number of current running host machines and game server instances)
         */
        MinFreeGameSlots: number;
        /** the current status of the build validation and processing steps */
        Status?: string;
        /** time this build was last modified (or uploaded, if this build has never been modified) */
        Timestamp: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetServerBuildUploadURLRequest */
    export interface GetServerBuildUploadURLRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique identifier of the game server build to upload */
        BuildId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetServerBuildUploadURLResult */
    export interface GetServerBuildUploadURLResult extends PlayFabModule.IPlayFabResultCommon  {
        /** pre-authorized URL for uploading the game server build package */
        URL?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetStoreItemsRequest */
    export interface GetStoreItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** catalog version to store items from. Use default catalog version if null */
        CatalogVersion?: string;
        /** Unqiue identifier for the store which is being requested. */
        StoreId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetStoreItemsResult */
    export interface GetStoreItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** The base catalog that this store is a part of. */
        CatalogVersion?: string;
        /** Additional data about the store. */
        MarketingData?: StoreMarketingModel;
        /** How the store was last updated (Admin or a third party). */
        Source?: string;
        /** Array of items which can be purchased from this store. */
        Store?: StoreItem[];
        /** The ID of this store. */
        StoreId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTaskInstanceRequest */
    export interface GetTaskInstanceRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** ID of the requested task instance. */
        TaskInstanceId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTaskInstancesRequest */
    export interface GetTaskInstancesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Optional range-from filter for task instances' StartedAt timestamp. */
        StartedAtRangeFrom?: string;
        /** Optional range-to filter for task instances' StartedAt timestamp. */
        StartedAtRangeTo?: string;
        /** Optional filter for task instances that are of a specific status. */
        StatusFilter?: string;
        /**
         * Name or ID of the task whose instances are being queried. If not specified, return all task instances that satisfy
         * conditions set by other filters.
         */
        TaskIdentifier?: NameIdentifier;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTaskInstancesResult */
    export interface GetTaskInstancesResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Basic status summaries of the queried task instances. Empty If no task instances meets the filter criteria. To get
         * detailed status summary, use Get*TaskInstance API according to task type (e.g.
         * GetActionsOnPlayersInSegmentTaskInstance).
         */
        Summaries?: TaskInstanceBasicSummary[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTasksRequest */
    export interface GetTasksRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Provide either the task ID or the task name to get a specific task. If not specified, return all defined tasks. */
        Identifier?: NameIdentifier;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTasksResult */
    export interface GetTasksResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Result tasks. Empty if there is no task found. */
        Tasks?: ScheduledTask[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTitleDataRequest */
    export interface GetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Specific keys to search for in the title data (leave null to get all keys) */
        Keys?: string[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetTitleDataResult */
    export interface GetTitleDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** a dictionary object of key / value pairs */
        Data?: { [key: string]: string | null };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserBansRequest */
    export interface GetUserBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserBansResult */
    export interface GetUserBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information about the bans */
        BanData?: BanInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserDataRequest */
    export interface GetUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * The version that currently exists according to the caller. The call will return the data for all of the keys if the
         * version in the system is greater than this.
         */
        IfChangedFromDataVersion?: number;
        /** Specific keys to search for in the custom user data. */
        Keys?: string[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserDataResult */
    export interface GetUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User specific data for this title. */
        Data?: { [key: string]: UserDataRecord };
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;
        /** PlayFab unique identifier of the user whose custom data is being returned. */
        PlayFabId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserInventoryRequest */
    export interface GetUserInventoryRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GetUserInventoryResult */
    export interface GetUserInventoryResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of inventory items belonging to the user. */
        Inventory?: ItemInstance[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Array of virtual currency balance(s) belonging to the user. */
        VirtualCurrency?: { [key: string]: number };
        /** Array of remaining times and timestamps for virtual currencies. */
        VirtualCurrencyRechargeTimes?: { [key: string]: VirtualCurrencyRechargeTime };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GrantedItemInstance */
    export interface GrantedItemInstance {
        /** Game specific comment associated with this instance when it was added to the user inventory. */
        Annotation?: string;
        /** Array of unique items that were awarded when this catalog item was purchased. */
        BundleContents?: string[];
        /**
         * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
         * container.
         */
        BundleParent?: string;
        /** Catalog version for the inventory item, when this instance was created. */
        CatalogVersion?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** A set of custom key-value pairs on the inventory item. */
        CustomData?: { [key: string]: string | null };
        /** CatalogItem.DisplayName at the time this item was purchased. */
        DisplayName?: string;
        /** Timestamp for when this instance will expire. */
        Expiration?: string;
        /** Class name for the inventory item, as defined in the catalog. */
        ItemClass?: string;
        /** Unique identifier for the inventory item, as defined in the catalog. */
        ItemId?: string;
        /** Unique item identifier for this specific instance of the item. */
        ItemInstanceId?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string;
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number;
        /** Result of this operation. */
        Result: boolean;
        /** Currency type for the cost of the catalog item. */
        UnitCurrency?: string;
        /** Cost of the catalog item in the given currency. */
        UnitPrice: number;
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GrantItemsToUsersRequest */
    export interface GrantItemsToUsersRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version from which items are to be granted. */
        CatalogVersion?: string;
        /** Array of items to grant and the users to whom the items are to be granted. */
        ItemGrants: ItemGrant[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.GrantItemsToUsersResult */
    export interface GrantItemsToUsersResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Array of items granted to users. */
        ItemGrantResults?: GrantedItemInstance[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.IncrementLimitedEditionItemAvailabilityRequest */
    export interface IncrementLimitedEditionItemAvailabilityRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to increase availability by. */
        Amount: number;
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** The item which needs more availability. */
        ItemId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.IncrementLimitedEditionItemAvailabilityResult */
    export interface IncrementLimitedEditionItemAvailabilityResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.IncrementPlayerStatisticVersionRequest */
    export interface IncrementPlayerStatisticVersionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique name of the statistic */
        StatisticName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.IncrementPlayerStatisticVersionResult */
    export interface IncrementPlayerStatisticVersionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** version change history of the statistic */
        StatisticVersion?: PlayerStatisticVersion;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ItemGrant */
    export interface ItemGrant {
        /** String detailing any additional information concerning this operation. */
        Annotation?: string;
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /** Unique identifier of the catalog item to be granted to the user. */
        ItemId: string;
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ItemInstance */
    export interface ItemInstance {
        /** Game specific comment associated with this instance when it was added to the user inventory. */
        Annotation?: string;
        /** Array of unique items that were awarded when this catalog item was purchased. */
        BundleContents?: string[];
        /**
         * Unique identifier for the parent inventory item, as defined in the catalog, for object which were added from a bundle or
         * container.
         */
        BundleParent?: string;
        /** Catalog version for the inventory item, when this instance was created. */
        CatalogVersion?: string;
        /** A set of custom key-value pairs on the inventory item. */
        CustomData?: { [key: string]: string | null };
        /** CatalogItem.DisplayName at the time this item was purchased. */
        DisplayName?: string;
        /** Timestamp for when this instance will expire. */
        Expiration?: string;
        /** Class name for the inventory item, as defined in the catalog. */
        ItemClass?: string;
        /** Unique identifier for the inventory item, as defined in the catalog. */
        ItemId?: string;
        /** Unique item identifier for this specific instance of the item. */
        ItemInstanceId?: string;
        /** Timestamp for when this instance was purchased. */
        PurchaseDate?: string;
        /** Total number of remaining uses, if this is a consumable item. */
        RemainingUses?: number;
        /** Currency type for the cost of the catalog item. */
        UnitCurrency?: string;
        /** Cost of the catalog item in the given currency. */
        UnitPrice: number;
        /** The number of uses that were added or removed to this item in this call. */
        UsesIncrementedBy?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.LinkedPlatformAccountModel */
    export interface LinkedPlatformAccountModel {
        /** Linked account email of the user on the platform, if available */
        Email?: string;
        /** Authentication platform */
        Platform?: string;
        /** Unique account identifier of the user on the platform */
        PlatformUserId?: string;
        /** Linked account username of the user on the platform, if available */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ListBuildsRequest */
    export interface ListBuildsRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ListBuildsResult */
    export interface ListBuildsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of uploaded game server builds */
        Builds?: GetServerBuildInfoResult[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ListVirtualCurrencyTypesRequest */
    export interface ListVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ListVirtualCurrencyTypesResult */
    export interface ListVirtualCurrencyTypesResult extends PlayFabModule.IPlayFabResultCommon  {
        /** List of virtual currency names defined for this title */
        VirtualCurrencies?: VirtualCurrencyData[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.LocationModel */
    export interface LocationModel {
        /** City name. */
        City?: string;
        /** The two-character continent code for this location */
        ContinentCode?: string;
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode?: string;
        /** Latitude coordinate of the geographic location. */
        Latitude?: number;
        /** Longitude coordinate of the geographic location. */
        Longitude?: number;

    }

    type LoginIdentityProvider = "Unknown"
        | "PlayFab"
        | "Custom"
        | "GameCenter"
        | "GooglePlay"
        | "Steam"
        | "XBoxLive"
        | "PSN"
        | "Kongregate"
        | "Facebook"
        | "IOSDevice"
        | "AndroidDevice"
        | "Twitch"
        | "WindowsHello";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.LogStatement */
    export interface LogStatement {
        /** Optional object accompanying the message as contextual information */
        Data?: any;
        /** 'Debug', 'Info', or 'Error' */
        Level?: string;
        Message?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.LookupUserAccountInfoRequest */
    export interface LookupUserAccountInfoRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address attached to their account */
        Email?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId?: string;
        /** Title specific username to match against existing user accounts */
        TitleDisplayName?: string;
        /** PlayFab username for the account (3-20 characters) */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.LookupUserAccountInfoResult */
    export interface LookupUserAccountInfoResult extends PlayFabModule.IPlayFabResultCommon  {
        /** User info for the user matching the request */
        UserInfo?: UserAccountInfo;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.MembershipModel */
    export interface MembershipModel {
        /** Whether this membership is active. That is, whether the MembershipExpiration time has been reached. */
        IsActive: boolean;
        /** The time this membership expires */
        MembershipExpiration: string;
        /** The id of the membership */
        MembershipId?: string;
        /**
         * Membership expirations can be explicitly overridden (via game manager or the Admin api). If this membership has been
         * overridden, this will be the new expiration time.
         */
        OverrideExpiration?: string;
        /** The list of subscriptions that this player has for this membership */
        Subscriptions?: SubscriptionModel[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ModifyMatchmakerGameModesRequest */
    export interface ModifyMatchmakerGameModesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** previously uploaded build version for which game modes are being specified */
        BuildVersion: string;
        /** array of game modes (Note: this will replace all game modes for the indicated build version) */
        GameModes: GameModeInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ModifyMatchmakerGameModesResult */
    export interface ModifyMatchmakerGameModesResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ModifyServerBuildRequest */
    export interface ModifyServerBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** array of regions where this build can used, when it is active */
        ActiveRegions?: string[];
        /** unique identifier of the previously uploaded build executable to be updated */
        BuildId: string;
        /** appended to the end of the command line when starting game servers */
        CommandLineTemplate?: string;
        /** developer comment(s) for this build */
        Comment?: string;
        /** path to the game server executable. Defaults to gameserver.exe */
        ExecutablePath?: string;
        /** maximum number of game server instances that can run on a single host machine */
        MaxGamesPerHost: number;
        /**
         * minimum capacity of additional game server instances that can be started before the autoscaling service starts new host
         * machines (given the number of current running host machines and game server instances)
         */
        MinFreeGameSlots: number;
        /** new timestamp */
        Timestamp?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ModifyServerBuildResult */
    export interface ModifyServerBuildResult extends PlayFabModule.IPlayFabResultCommon  {
        /** array of regions where this build can used, when it is active */
        ActiveRegions?: string[];
        /** unique identifier for this build executable */
        BuildId?: string;
        /** appended to the end of the command line when starting game servers */
        CommandLineTemplate?: string;
        /** developer comment(s) for this build */
        Comment?: string;
        /** path to the game server executable. Defaults to gameserver.exe */
        ExecutablePath?: string;
        /** maximum number of game server instances that can run on a single host machine */
        MaxGamesPerHost: number;
        /**
         * minimum capacity of additional game server instances that can be started before the autoscaling service starts new host
         * machines (given the number of current running host machines and game server instances)
         */
        MinFreeGameSlots: number;
        /** the current status of the build validation and processing steps */
        Status?: string;
        /** time this build was last modified (or uploaded, if this build has never been modified) */
        Timestamp: string;
        /**
         * Unique identifier for the title, found in the Settings > Game Properties section of the PlayFab developer site when a
         * title has been selected.
         */
        TitleId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ModifyUserVirtualCurrencyResult */
    export interface ModifyUserVirtualCurrencyResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Balance of the virtual currency after modification. */
        Balance: number;
        /**
         * Amount added or subtracted from the user's virtual currency. Maximum VC balance is Int32 (2,147,483,647). Any increase
         * over this value will be discarded.
         */
        BalanceChange: number;
        /** User currency was subtracted from. */
        PlayFabId?: string;
        /** Name of the virtual currency which was modified. */
        VirtualCurrency?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.NameIdentifier */
    export interface NameIdentifier {
        Id?: string;
        Name?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PermissionStatement */
    export interface PermissionStatement {
        /** The action this statement effects. The only supported action is 'Execute'. */
        Action: string;
        /** Additional conditions to be applied for API Resources. */
        ApiConditions?: ApiCondition;
        /** A comment about the statement. Intended solely for bookkeeping and debugging. */
        Comment?: string;
        /** The effect this statement will have. It could be either Allow or Deny */
        Effect: string;
        /** The principal this statement will effect. The only supported principal is '*'. */
        Principal: string;
        /**
         * The resource this statements effects. The only supported resources look like 'pfrn:api--*' for all apis, or
         * 'pfrn:api--/Client/ConfirmPurchase' for specific apis.
         */
        Resource: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerLinkedAccount */
    export interface PlayerLinkedAccount {
        /** Linked account's email */
        Email?: string;
        /** Authentication platform */
        Platform?: string;
        /** Platform user identifier */
        PlatformUserId?: string;
        /** Linked account's username */
        Username?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerLocation */
    export interface PlayerLocation {
        /** City of the player's geographic location. */
        City?: string;
        /** The two-character continent code for this location */
        ContinentCode: string;
        /** The two-character ISO 3166-1 country code for the country associated with the location */
        CountryCode: string;
        /** Latitude coordinate of the player's geographic location. */
        Latitude?: number;
        /** Longitude coordinate of the player's geographic location. */
        Longitude?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerProfile */
    export interface PlayerProfile {
        /** Array of ad campaigns player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttribution[];
        /** Image URL of the player's avatar. */
        AvatarUrl?: string;
        /** Banned until UTC Date. If permanent ban this is set for 20 years after the original ban date. */
        BannedUntil?: string;
        /** Array of contact email addresses associated with the player */
        ContactEmailAddresses?: ContactEmailInfo[];
        /** Player record created */
        Created?: string;
        /** Player Display Name */
        DisplayName?: string;
        /** Last login */
        LastLogin?: string;
        /** Array of third party accounts linked to this player */
        LinkedAccounts?: PlayerLinkedAccount[];
        /** Dictionary of player's locations by type. */
        Locations?: { [key: string]: PlayerLocation };
        /** Player account origination */
        Origination?: string;
        /** PlayFab Player ID */
        PlayerId?: string;
        /** Array of player statistics */
        PlayerStatistics?: PlayerStatistic[];
        /** Publisher this player belongs to */
        PublisherId?: string;
        /** Array of configured push notification end points */
        PushNotificationRegistrations?: PushNotificationRegistration[];
        /** Dictionary of player's statistics using only the latest version's value */
        Statistics?: { [key: string]: number };
        /** List of player's tags for segmentation. */
        Tags?: string[];
        /** Title ID this profile applies to */
        TitleId?: string;
        /** A sum of player's total purchases in USD across all currencies. */
        TotalValueToDateInUSD?: number;
        /** Dictionary of player's total purchases by currency. */
        ValuesToDate?: { [key: string]: number };
        /** Dictionary of player's virtual currency balances */
        VirtualCurrencyBalances?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerProfileModel */
    export interface PlayerProfileModel {
        /** List of advertising campaigns the player has been attributed to */
        AdCampaignAttributions?: AdCampaignAttributionModel[];
        /** URL of the player's avatar image */
        AvatarUrl?: string;
        /** If the player is currently banned, the UTC Date when the ban expires */
        BannedUntil?: string;
        /** List of all contact email info associated with the player account */
        ContactEmailAddresses?: ContactEmailInfoModel[];
        /** Player record created */
        Created?: string;
        /** Player display name */
        DisplayName?: string;
        /** UTC time when the player most recently logged in to the title */
        LastLogin?: string;
        /** List of all authentication systems linked to this player account */
        LinkedAccounts?: LinkedPlatformAccountModel[];
        /** List of geographic locations from which the player has logged in to the title */
        Locations?: LocationModel[];
        /** List of memberships for the player, along with whether are expired. */
        Memberships?: MembershipModel[];
        /** Player account origination */
        Origination?: string;
        /** PlayFab player account unique identifier */
        PlayerId?: string;
        /** Publisher this player belongs to */
        PublisherId?: string;
        /** List of configured end points registered for sending the player push notifications */
        PushNotificationRegistrations?: PushNotificationRegistrationModel[];
        /** List of leaderboard statistic values for the player */
        Statistics?: StatisticModel[];
        /** List of player's tags for segmentation */
        Tags?: TagModel[];
        /** Title ID this player profile applies to */
        TitleId?: string;
        /**
         * Sum of the player's purchases made with real-money currencies, converted to US dollars equivalent and represented as a
         * whole number of cents (1/100 USD).       For example, 999 indicates nine dollars and ninety-nine cents.
         */
        TotalValueToDateInUSD?: number;
        /** List of the player's lifetime purchase totals, summed by real-money currency */
        ValuesToDate?: ValueToDateModel[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerProfileViewConstraints */
    export interface PlayerProfileViewConstraints {
        /** Whether to show player's avatar URL. Defaults to false */
        ShowAvatarUrl: boolean;
        /** Whether to show the banned until time. Defaults to false */
        ShowBannedUntil: boolean;
        /** Whether to show campaign attributions. Defaults to false */
        ShowCampaignAttributions: boolean;
        /** Whether to show contact email addresses. Defaults to false */
        ShowContactEmailAddresses: boolean;
        /** Whether to show the created date. Defaults to false */
        ShowCreated: boolean;
        /** Whether to show the display name. Defaults to false */
        ShowDisplayName: boolean;
        /** Whether to show the last login time. Defaults to false */
        ShowLastLogin: boolean;
        /** Whether to show the linked accounts. Defaults to false */
        ShowLinkedAccounts: boolean;
        /** Whether to show player's locations. Defaults to false */
        ShowLocations: boolean;
        /** Whether to show player's membership information. Defaults to false */
        ShowMemberships: boolean;
        /** Whether to show origination. Defaults to false */
        ShowOrigination: boolean;
        /** Whether to show push notification registrations. Defaults to false */
        ShowPushNotificationRegistrations: boolean;
        /** Reserved for future development */
        ShowStatistics: boolean;
        /** Whether to show tags. Defaults to false */
        ShowTags: boolean;
        /** Whether to show the total value to date in usd. Defaults to false */
        ShowTotalValueToDateInUsd: boolean;
        /** Whether to show the values to date. Defaults to false */
        ShowValuesToDate: boolean;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerStatistic */
    export interface PlayerStatistic {
        /** Statistic ID */
        Id?: string;
        /** Statistic name */
        Name?: string;
        /** Current statistic value */
        StatisticValue: number;
        /** Statistic version (0 if not a versioned statistic) */
        StatisticVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerStatisticDefinition */
    export interface PlayerStatisticDefinition {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** current active version of the statistic, incremented each time the statistic resets */
        CurrentVersion: number;
        /** unique name of the statistic */
        StatisticName?: string;
        /** interval at which the values of the statistic for all players are reset automatically */
        VersionChangeInterval?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PlayerStatisticVersion */
    export interface PlayerStatisticVersion {
        /** time when the statistic version became active */
        ActivationTime: string;
        /** URL for the downloadable archive of player statistic values, if available */
        ArchiveDownloadUrl?: string;
        /** time when the statistic version became inactive due to statistic version incrementing */
        DeactivationTime?: string;
        /** time at which the statistic version was scheduled to become active, based on the configured ResetInterval */
        ScheduledActivationTime?: string;
        /** time at which the statistic version was scheduled to become inactive, based on the configured ResetInterval */
        ScheduledDeactivationTime?: string;
        /** name of the statistic when the version became active */
        StatisticName?: string;
        /** status of the statistic version */
        Status?: string;
        /** version of the statistic */
        Version: number;

    }

    type PushNotificationPlatform = "ApplePushNotificationService"
        | "GoogleCloudMessaging";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PushNotificationRegistration */
    export interface PushNotificationRegistration {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string;
        /** Push notification platform */
        Platform?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.PushNotificationRegistrationModel */
    export interface PushNotificationRegistrationModel {
        /** Notification configured endpoint */
        NotificationEndpointARN?: string;
        /** Push notification platform */
        Platform?: string;

    }

    type PushSetupPlatform = "GCM"
        | "APNS"
        | "APNS_SANDBOX";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RandomResultTable */
    export interface RandomResultTable {
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[];
        /** Unique name for this drop table */
        TableId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RandomResultTableListing */
    export interface RandomResultTableListing {
        /** Catalog version this table is associated with */
        CatalogVersion?: string;
        /** Child nodes that indicate what kind of drop table item this actually is. */
        Nodes: ResultTableNode[];
        /** Unique name for this drop table */
        TableId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RefundPurchaseRequest */
    export interface RefundPurchaseRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique order ID for the purchase in question. */
        OrderId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * Reason for refund. In the case of Facebook this must match one of their refund or dispute resolution enums (See:
         * https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds)
         */
        Reason?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RefundPurchaseResponse */
    export interface RefundPurchaseResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The order's updated purchase status. */
        PurchaseStatus?: string;

    }

    type Region = "USCentral"
        | "USEast"
        | "EUWest"
        | "Singapore"
        | "Japan"
        | "Brazil"
        | "Australia";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RemovePlayerTagRequest */
    export interface RemovePlayerTagRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /** Unique tag for player profile. */
        TagName: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RemovePlayerTagResult */
    export interface RemovePlayerTagResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RemoveServerBuildRequest */
    export interface RemoveServerBuildRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** unique identifier of the previously uploaded build executable to be removed */
        BuildId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RemoveServerBuildResult */
    export interface RemoveServerBuildResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RemoveVirtualCurrencyTypesRequest */
    export interface RemoveVirtualCurrencyTypesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of virtual currencies to delete */
        VirtualCurrencies: VirtualCurrencyData[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetCharacterStatisticsRequest */
    export interface ResetCharacterStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetCharacterStatisticsResult */
    export interface ResetCharacterStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetPasswordRequest */
    export interface ResetPasswordRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The new password for the player. */
        Password: string;
        /** The token of the player requesting the password reset. */
        Token: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetPasswordResult */
    export interface ResetPasswordResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetUserStatisticsRequest */
    export interface ResetUserStatisticsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResetUserStatisticsResult */
    export interface ResetUserStatisticsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    type ResolutionOutcome = "Revoke"
        | "Reinstate"
        | "Manual";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResolvePurchaseDisputeRequest */
    export interface ResolvePurchaseDisputeRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique order ID for the purchase in question. */
        OrderId: string;
        /**
         * Enum for the desired purchase result state after notifying the payment provider. Valid values are Revoke, Reinstate and
         * Manual. Manual will cause no change to the order state.
         */
        Outcome: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;
        /**
         * Reason for refund. In the case of Facebook this must match one of their refund or dispute resolution enums (See:
         * https://developers.facebook.com/docs/payments/implementation-guide/handling-disputes-refunds)
         */
        Reason?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResolvePurchaseDisputeResponse */
    export interface ResolvePurchaseDisputeResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The order's updated purchase status. */
        PurchaseStatus?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ResultTableNode */
    export interface ResultTableNode {
        /** Either an ItemId, or the TableId of another random result table */
        ResultItem: string;
        /** Whether this entry in the table is an item or a link to another table */
        ResultItemType: string;
        /** How likely this is to be rolled - larger numbers add more weight */
        Weight: number;

    }

    type ResultTableNodeType = "ItemId"
        | "TableId";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeAllBansForUserRequest */
    export interface RevokeAllBansForUserRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeAllBansForUserResult */
    export interface RevokeAllBansForUserResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were revoked. */
        BanData?: BanInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeBansRequest */
    export interface RevokeBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Ids of the bans to be revoked. Maximum 100. */
        BanIds: string[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeBansResult */
    export interface RevokeBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were revoked */
        BanData?: BanInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeInventoryItem */
    export interface RevokeInventoryItem {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeInventoryItemRequest */
    export interface RevokeInventoryItemRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Unique PlayFab assigned ID for a specific character owned by a user */
        CharacterId?: string;
        /** Unique PlayFab assigned instance identifier of the item */
        ItemInstanceId: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeInventoryItemsRequest */
    export interface RevokeInventoryItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Array of player items to revoke, between 1 and 25 items. */
        Items: RevokeInventoryItem[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeInventoryItemsResult */
    export interface RevokeInventoryItemsResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Collection of any errors that occurred during processing. */
        Errors?: RevokeItemError[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeInventoryResult */
    export interface RevokeInventoryResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RevokeItemError */
    export interface RevokeItemError {
        /** Specific error that was encountered. */
        Error?: string;
        /** Item information that failed to be revoked. */
        Item?: RevokeInventoryItem;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RunTaskRequest */
    export interface RunTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Provide either the task ID or the task name to run a task. */
        Identifier?: NameIdentifier;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.RunTaskResult */
    export interface RunTaskResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * ID of the task instance that is started. This can be used in Get*TaskInstance (e.g. GetCloudScriptTaskInstance) API call
         * to retrieve status for the task instance.
         */
        TaskInstanceId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ScheduledTask */
    export interface ScheduledTask {
        /** Description the task */
        Description?: string;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** UTC time of last run */
        LastRunTime?: string;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** UTC time of next run */
        NextRunTime?: string;
        /**
         * Task parameter. Different types of task have different parameter structure. See each task type's create API
         * documentation for the details.
         */
        Parameter?: any;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;
        /** ID of the task */
        TaskId?: string;
        /** Task type. */
        Type?: string;

    }

    type ScheduledTaskType = "CloudScript"
        | "ActionsOnPlayerSegment";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ScriptExecutionError */
    export interface ScriptExecutionError {
        /**
         * Error code, such as CloudScriptNotFound, JavascriptException, CloudScriptFunctionArgumentSizeExceeded,
         * CloudScriptAPIRequestCountExceeded, CloudScriptAPIRequestError, or CloudScriptHTTPRequestError
         */
        Error?: string;
        /** Details about the error */
        Message?: string;
        /** Point during the execution of the script at which the error occurred, if any */
        StackTrace?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SendAccountRecoveryEmailRequest */
    export interface SendAccountRecoveryEmailRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** User email address attached to their account */
        Email: string;
        /** The email template id of the account recovery email template to send. */
        EmailTemplateId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SendAccountRecoveryEmailResult */
    export interface SendAccountRecoveryEmailResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPlayerSecretRequest */
    export interface SetPlayerSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Player secret that is used to verify API request signatures (Enterprise Only). */
        PlayerSecret: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPlayerSecretResult */
    export interface SetPlayerSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPublishedRevisionRequest */
    export interface SetPublishedRevisionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Revision to make the current published revision */
        Revision: number;
        /** Version number */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPublishedRevisionResult */
    export interface SetPublishedRevisionResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPublisherDataRequest */
    export interface SetPublisherDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string;
        /** new value to set. Set to null to remove a value */
        Value?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetPublisherDataResult */
    export interface SetPublisherDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetTitleDataRequest */
    export interface SetTitleDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * key we want to set a value on (note, this is additive - will only replace an existing key's value if they are the same
         * name.) Keys are trimmed of whitespace. Keys may not begin with the '!' character.
         */
        Key: string;
        /** new value to set. Set to null to remove a value */
        Value?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetTitleDataResult */
    export interface SetTitleDataResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetupPushNotificationRequest */
    export interface SetupPushNotificationRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Credential is the Private Key for APNS/APNS_SANDBOX, and the API Key for GCM */
        Credential: string;
        /** for APNS, this is the PlatformPrincipal (SSL Certificate) */
        Key?: string;
        /**
         * name of the application sending the message (application names must be made up of only uppercase and lowercase ASCII
         * letters, numbers, underscores, hyphens, and periods, and must be between 1 and 256 characters long)
         */
        Name: string;
        /**
         * replace any existing ARN with the newly generated one. If this is set to false, an error will be returned if
         * notifications have already setup for this platform.
         */
        OverwriteOldARN: boolean;
        /**
         * supported notification platforms are Apple Push Notification Service (APNS and APNS_SANDBOX) for iOS and Google Cloud
         * Messaging (GCM) for Android
         */
        Platform: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SetupPushNotificationResult */
    export interface SetupPushNotificationResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Amazon Resource Name for the created notification topic. */
        ARN?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SharedSecret */
    export interface SharedSecret {
        /** Flag to indicate if this key is disabled */
        Disabled: boolean;
        /** Friendly name for this key */
        FriendlyName?: string;
        /** The player shared secret to use when calling Client/GetTitlePublicKey */
        SecretKey?: string;

    }

    type SourceType = "Admin"
        | "BackEnd"
        | "GameClient"
        | "GameServer"
        | "Partner";

    type StatisticAggregationMethod = "Last"
        | "Min"
        | "Max"
        | "Sum";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.StatisticModel */
    export interface StatisticModel {
        /** Statistic name */
        Name?: string;
        /** Statistic value */
        Value: number;
        /** Statistic version (0 if not a versioned statistic) */
        Version: number;

    }

    type StatisticResetIntervalOption = "Never"
        | "Hour"
        | "Day"
        | "Week"
        | "Month";

    type StatisticVersionArchivalStatus = "NotScheduled"
        | "Scheduled"
        | "Queued"
        | "InProgress"
        | "Complete";

    type StatisticVersionStatus = "Active"
        | "SnapshotPending"
        | "Snapshot"
        | "ArchivalPending"
        | "Archived";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.StoreItem */
    export interface StoreItem {
        /** Store specific custom data. The data only exists as part of this store; it is not transferred to item instances */
        CustomData?: any;
        /** Intended display position for this item. Note that 0 is the first position */
        DisplayPosition?: number;
        /**
         * Unique identifier of the item as it exists in the catalog - note that this must exactly match the ItemId from the
         * catalog
         */
        ItemId: string;
        /** Override prices for this item for specific currencies */
        RealCurrencyPrices?: { [key: string]: number };
        /** Override prices for this item in virtual currencies and "RM" (the base Real Money purchase price, in USD pennies) */
        VirtualCurrencyPrices?: { [key: string]: number };

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.StoreMarketingModel */
    export interface StoreMarketingModel {
        /** Tagline for a store. */
        Description?: string;
        /** Display name of a store as it will appear to users. */
        DisplayName?: string;
        /** Custom data about a store. */
        Metadata?: any;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SubscriptionModel */
    export interface SubscriptionModel {
        /** When this subscription expires. */
        Expiration: string;
        /** The time the subscription was orignially purchased */
        InitialSubscriptionTime: string;
        /** Whether this subscription is currently active. That is, if Expiration > now. */
        IsActive: boolean;
        /** The status of this subscription, according to the subscription provider. */
        Status?: string;
        /** The id for this subscription */
        SubscriptionId?: string;
        /** The item id for this subscription from the primary catalog */
        SubscriptionItemId?: string;
        /** The provider for this subscription. Apple or Google Play are supported today. */
        SubscriptionProvider?: string;

    }

    type SubscriptionProviderStatus = "NoError"
        | "Cancelled"
        | "UnknownError"
        | "BillingError"
        | "ProductUnavailable"
        | "CustomerDidNotAcceptPriceChange"
        | "FreeTrial"
        | "PaymentPending";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.SubtractUserVirtualCurrencyRequest */
    export interface SubtractUserVirtualCurrencyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Amount to be subtracted from the user balance of the specified virtual currency. */
        Amount: number;
        /** PlayFab unique identifier of the user whose virtual currency balance is to be decreased. */
        PlayFabId: string;
        /** Name of the virtual currency which is to be decremented. */
        VirtualCurrency: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.TagModel */
    export interface TagModel {
        /** Full value of the tag, including namespace */
        TagValue?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.TaskInstanceBasicSummary */
    export interface TaskInstanceBasicSummary {
        /** UTC timestamp when the task completed. */
        CompletedAt?: string;
        /** Estimated time remaining in seconds. */
        EstimatedSecondsRemaining?: number;
        /** Progress represented as percentage. */
        PercentComplete?: number;
        /** If manually scheduled, ID of user who scheduled the task. */
        ScheduledByUserId?: string;
        /** UTC timestamp when the task started. */
        StartedAt: string;
        /** Current status of the task instance. */
        Status?: string;
        /** Identifier of the task this instance belongs to. */
        TaskIdentifier?: NameIdentifier;
        /** ID of the task instance. */
        TaskInstanceId?: string;
        /** Type of the task. */
        Type?: string;

    }

    type TaskInstanceStatus = "Succeeded"
        | "Starting"
        | "InProgress"
        | "Failed"
        | "Aborted"
        | "Pending";

    type TitleActivationStatus = "None"
        | "ActivatedTitleKey"
        | "PendingSteam"
        | "ActivatedSteam"
        | "RevokedSteam";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateBanRequest */
    export interface UpdateBanRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** The updated active state for the ban. Null for no change. */
        Active?: boolean;
        /** The id of the ban to be updated. */
        BanId: string;
        /** The updated expiration date for the ban. Null for no change. */
        Expires?: string;
        /** The updated IP address for the ban. Null for no change. */
        IPAddress?: string;
        /** The updated MAC address for the ban. Null for no change. */
        MACAddress?: string;
        /** Whether to make this ban permanent. Set to true to make this ban permanent. This will not modify Active state. */
        Permanent?: boolean;
        /** The updated reason for the ban to be updated. Maximum 140 characters. Null for no change. */
        Reason?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateBansRequest */
    export interface UpdateBansRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** List of bans to be updated. Maximum 100. */
        Bans: UpdateBanRequest[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateBansResult */
    export interface UpdateBansResult extends PlayFabModule.IPlayFabResultCommon  {
        /** Information on the bans that were updated */
        BanData?: BanInfo[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateCatalogItemsRequest */
    export interface UpdateCatalogItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Array of catalog items to be submitted. Note that while CatalogItem has a parameter for CatalogVersion, it is not
         * required and ignored in this call.
         */
        Catalog?: CatalogItem[];
        /** Which catalog is being updated. If null, uses the default catalog. */
        CatalogVersion?: string;
        /**
         * Should this catalog be set as the default catalog. Defaults to true. If there is currently no default catalog, this will
         * always set it.
         */
        SetAsDefaultCatalog?: boolean;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateCatalogItemsResult */
    export interface UpdateCatalogItemsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateCloudScriptRequest */
    export interface UpdateCloudScriptRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** PlayFab user ID of the developer initiating the request. */
        DeveloperPlayFabId?: string;
        /** List of Cloud Script files to upload to create the new revision. Must have at least one file. */
        Files: CloudScriptFile[];
        /** Immediately publish the new revision */
        Publish: boolean;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateCloudScriptResult */
    export interface UpdateCloudScriptResult extends PlayFabModule.IPlayFabResultCommon  {
        /** New revision number created */
        Revision: number;
        /** Cloud Script version updated */
        Version: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePlayerSharedSecretRequest */
    export interface UpdatePlayerSharedSecretRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Disable or Enable this key */
        Disabled: boolean;
        /** Friendly name for this key */
        FriendlyName?: string;
        /** The shared secret key to update */
        SecretKey?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePlayerSharedSecretResult */
    export interface UpdatePlayerSharedSecretResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePlayerStatisticDefinitionRequest */
    export interface UpdatePlayerStatisticDefinitionRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** the aggregation method to use in updating the statistic (defaults to last) */
        AggregationMethod?: string;
        /** unique name of the statistic */
        StatisticName: string;
        /**
         * interval at which the values of the statistic for all players are reset (changes are effective at the next occurance of
         * the new interval boundary)
         */
        VersionChangeInterval?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePlayerStatisticDefinitionResult */
    export interface UpdatePlayerStatisticDefinitionResult extends PlayFabModule.IPlayFabResultCommon  {
        /** updated statistic definition */
        Statistic?: PlayerStatisticDefinition;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePolicyRequest */
    export interface UpdatePolicyRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Whether to overwrite or append to the existing policy. */
        OverwritePolicy: boolean;
        /** The name of the policy being updated. Only supported name is 'ApiPolicy' */
        PolicyName: string;
        /** The new statements to include in the policy. */
        Statements: PermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdatePolicyResponse */
    export interface UpdatePolicyResponse extends PlayFabModule.IPlayFabResultCommon  {
        /** The name of the policy that was updated. */
        PolicyName?: string;
        /** The statements included in the new version of the policy. */
        Statements?: PermissionStatement[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateRandomResultTablesRequest */
    export interface UpdateRandomResultTablesRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** which catalog is being updated. If null, update the current default catalog version */
        CatalogVersion?: string;
        /**
         * array of random result tables to make available (Note: specifying an existing TableId will result in overwriting that
         * table, while any others will be added to the available set)
         */
        Tables?: RandomResultTable[];

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateRandomResultTablesResult */
    export interface UpdateRandomResultTablesResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateStoreItemsRequest */
    export interface UpdateStoreItemsRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Catalog version of the store to update. If null, uses the default catalog. */
        CatalogVersion?: string;
        /** Additional data about the store */
        MarketingData?: StoreMarketingModel;
        /** Array of store items - references to catalog items, with specific pricing - to be added */
        Store?: StoreItem[];
        /** Unique identifier for the store which is to be updated */
        StoreId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateStoreItemsResult */
    export interface UpdateStoreItemsResult extends PlayFabModule.IPlayFabResultCommon  {

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateTaskRequest */
    export interface UpdateTaskRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** Description the task */
        Description?: string;
        /** Specify either the task ID or the name of the task to be updated. */
        Identifier?: NameIdentifier;
        /** Whether the schedule is active. Inactive schedule will not trigger task execution. */
        IsActive: boolean;
        /** Name of the task. This is a unique identifier for tasks in the title. */
        Name: string;
        /** Parameter object specific to the task type. See each task type's create API documentation for details. */
        Parameter?: any;
        /** Cron expression for the run schedule of the task. The expression should be in UTC. */
        Schedule?: string;
        /** Task type. */
        Type: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateUserDataRequest */
    export interface UpdateUserDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Permission to be applied to all user data keys written in this request. Defaults to "private" if not set. */
        Permission?: string;
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateUserDataResult */
    export interface UpdateUserDataResult extends PlayFabModule.IPlayFabResultCommon  {
        /**
         * Indicates the current version of the data that has been set. This is incremented with every set call for that type of
         * data (read-only, internal, etc). This version can be provided in Get calls to find updated data.
         */
        DataVersion: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateUserInternalDataRequest */
    export interface UpdateUserInternalDataRequest extends PlayFabModule.IPlayFabRequestCommon {
        /**
         * Key-value pairs to be written to the custom data. Note that keys are trimmed of whitespace, are limited in size, and may
         * not begin with a '!' character or be null.
         */
        Data?: { [key: string]: string | null };
        /**
         * Optional list of Data-keys to remove from UserData. Some SDKs cannot insert null-values into Data due to language
         * constraints. Use this to delete the keys directly.
         */
        KeysToRemove?: string[];
        /** Unique PlayFab assigned ID of the user on whom the operation will be performed. */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateUserTitleDisplayNameRequest */
    export interface UpdateUserTitleDisplayNameRequest extends PlayFabModule.IPlayFabRequestCommon {
        /** New title display name for the user - must be between 3 and 25 characters */
        DisplayName: string;
        /** PlayFab unique identifier of the user whose title specific display name is to be changed */
        PlayFabId: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UpdateUserTitleDisplayNameResult */
    export interface UpdateUserTitleDisplayNameResult extends PlayFabModule.IPlayFabResultCommon  {
        /** current title display name for the user (this will be the original display name if the rename attempt failed) */
        DisplayName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserAccountInfo */
    export interface UserAccountInfo {
        /** User Android device information, if an Android device has been linked */
        AndroidDeviceInfo?: UserAndroidDeviceInfo;
        /** Timestamp indicating when the user account was created */
        Created: string;
        /** Custom ID information, if a custom ID has been assigned */
        CustomIdInfo?: UserCustomIdInfo;
        /** User Facebook information, if a Facebook account has been linked */
        FacebookInfo?: UserFacebookInfo;
        /** User Gamecenter information, if a Gamecenter account has been linked */
        GameCenterInfo?: UserGameCenterInfo;
        /** User Google account information, if a Google account has been linked */
        GoogleInfo?: UserGoogleInfo;
        /** User iOS device information, if an iOS device has been linked */
        IosDeviceInfo?: UserIosDeviceInfo;
        /** User Kongregate account information, if a Kongregate account has been linked */
        KongregateInfo?: UserKongregateInfo;
        /** Unique identifier for the user account */
        PlayFabId?: string;
        /** Personal information for the user which is considered more sensitive */
        PrivateInfo?: UserPrivateAccountInfo;
        /** User PSN account information, if a PSN account has been linked */
        PsnInfo?: UserPsnInfo;
        /** User Steam information, if a Steam account has been linked */
        SteamInfo?: UserSteamInfo;
        /** Title-specific information for the user account */
        TitleInfo?: UserTitleInfo;
        /** User Twitch account information, if a Twitch account has been linked */
        TwitchInfo?: UserTwitchInfo;
        /** User account name in the PlayFab service */
        Username?: string;
        /** User XBox account information, if a XBox account has been linked */
        XboxInfo?: UserXboxInfo;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserAndroidDeviceInfo */
    export interface UserAndroidDeviceInfo {
        /** Android device ID */
        AndroidDeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserCustomIdInfo */
    export interface UserCustomIdInfo {
        /** Custom ID */
        CustomId?: string;

    }

    type UserDataPermission = "Private"
        | "Public";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserDataRecord */
    export interface UserDataRecord {
        /** Timestamp for when this data was last updated. */
        LastUpdated: string;
        /**
         * Indicates whether this data can be read by all users (public) or only the user (private). This is used for GetUserData
         * requests being made by one player about another player.
         */
        Permission?: string;
        /** Data stored for the specified user data key. */
        Value?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserFacebookInfo */
    export interface UserFacebookInfo {
        /** Facebook identifier */
        FacebookId?: string;
        /** Facebook full name */
        FullName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserGameCenterInfo */
    export interface UserGameCenterInfo {
        /** Gamecenter identifier */
        GameCenterId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserGoogleInfo */
    export interface UserGoogleInfo {
        /** Email address of the Google account */
        GoogleEmail?: string;
        /** Gender information of the Google account */
        GoogleGender?: string;
        /** Google ID */
        GoogleId?: string;
        /** Locale of the Google account */
        GoogleLocale?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserIosDeviceInfo */
    export interface UserIosDeviceInfo {
        /** iOS device ID */
        IosDeviceId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserKongregateInfo */
    export interface UserKongregateInfo {
        /** Kongregate ID */
        KongregateId?: string;
        /** Kongregate Username */
        KongregateName?: string;

    }

    type UserOrigination = "Organic"
        | "Steam"
        | "Google"
        | "Amazon"
        | "Facebook"
        | "Kongregate"
        | "GamersFirst"
        | "Unknown"
        | "IOS"
        | "LoadTest"
        | "Android"
        | "PSN"
        | "GameCenter"
        | "CustomId"
        | "XboxLive"
        | "Parse"
        | "Twitch"
        | "WindowsHello";

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserPrivateAccountInfo */
    export interface UserPrivateAccountInfo {
        /** user email address */
        Email?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserPsnInfo */
    export interface UserPsnInfo {
        /** PSN account ID */
        PsnAccountId?: string;
        /** PSN online ID */
        PsnOnlineId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserSteamInfo */
    export interface UserSteamInfo {
        /** what stage of game ownership the user is listed as being in, from Steam */
        SteamActivationStatus?: string;
        /** the country in which the player resides, from Steam data */
        SteamCountry?: string;
        /** currency type set in the user Steam account */
        SteamCurrency?: string;
        /** Steam identifier */
        SteamId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserTitleInfo */
    export interface UserTitleInfo {
        /** URL to the player's avatar. */
        AvatarUrl?: string;
        /**
         * timestamp indicating when the user was first associated with this game (this can differ significantly from when the user
         * first registered with PlayFab)
         */
        Created: string;
        /** name of the user, as it is displayed in-game */
        DisplayName?: string;
        /**
         * timestamp indicating when the user first signed into this game (this can differ from the Created timestamp, as other
         * events, such as issuing a beta key to the user, can associate the title to the user)
         */
        FirstLogin?: string;
        /** boolean indicating whether or not the user is currently banned for a title */
        isBanned?: boolean;
        /** timestamp for the last user login for this title */
        LastLogin?: string;
        /** source by which the user first joined the game, if known */
        Origination?: string;
        /** Title player account entity for this user */
        TitlePlayerAccount?: EntityKey;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserTwitchInfo */
    export interface UserTwitchInfo {
        /** Twitch ID */
        TwitchId?: string;
        /** Twitch Username */
        TwitchUserName?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.UserXboxInfo */
    export interface UserXboxInfo {
        /** XBox user ID */
        XboxUserId?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.ValueToDateModel */
    export interface ValueToDateModel {
        /** ISO 4217 code of the currency used in the purchases */
        Currency?: string;
        /**
         * Total value of the purchases in a whole number of 1/100 monetary units. For example, 999 indicates nine dollars and
         * ninety-nine cents when Currency is 'USD')
         */
        TotalValue: number;
        /**
         * Total value of the purchases in a string representation of decimal monetary units. For example, '9.99' indicates nine
         * dollars and ninety-nine cents when Currency is 'USD'.
         */
        TotalValueAsDecimal?: string;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.VirtualCurrencyData */
    export interface VirtualCurrencyData {
        /** unique two-character identifier for this currency type (e.g.: "CC") */
        CurrencyCode: string;
        /** friendly name to show in the developer portal, reports, etc. */
        DisplayName?: string;
        /** amount to automatically grant users upon first login to the title */
        InitialDeposit?: number;
        /** maximum amount to which the currency will recharge (cannot exceed MaxAmount, but can be less) */
        RechargeMax?: number;
        /** rate at which the currency automatically be added to over time, in units per day (24 hours) */
        RechargeRate?: number;

    }

    /** https://api.playfab.com/Documentation/Entity/datatype/PlayFab.Admin.Models/PlayFab.Admin.Models.VirtualCurrencyRechargeTime */
    export interface VirtualCurrencyRechargeTime {
        /**
         * Maximum value to which the regenerating currency will automatically increment. Note that it can exceed this value
         * through use of the AddUserVirtualCurrency API call. However, it will not regenerate automatically until it has fallen
         * below this value.
         */
        RechargeMax: number;
        /** Server timestamp in UTC indicating the next time the virtual currency will be incremented. */
        RechargeTime: string;
        /** Time remaining (in seconds) before the next recharge increment of the virtual currency. */
        SecondsToRecharge: number;

    }


}
